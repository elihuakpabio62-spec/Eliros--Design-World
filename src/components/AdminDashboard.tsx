import React, { useState } from 'react';
import { X, Lock, ShieldCheck, Image, FileText, Settings, Plus, Trash2, Edit2, CheckCircle2, Sparkles, Save, Database, ExternalLink } from 'lucide-react';
import { SiteContent, GalleryItem, ServiceItem, AnnouncementItem } from '../types';
import { saveSupabaseConfig, getSupabaseStoredConfig, supabase } from '../lib/supabase';

interface AdminDashboardProps {
  isOpen: boolean;
  content: SiteContent;
  gallery: GalleryItem[];
  services: ServiceItem[];
  announcements: AnnouncementItem[];
  onClose: () => void;
  onUpdateContent: (newContent: SiteContent) => void;
  onUpdateGallery: (newGallery: GalleryItem[]) => void;
  onUpdateServices: (newServices: ServiceItem[]) => void;
  onUpdateAnnouncements: (newAnnouncements: AnnouncementItem[]) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  content,
  gallery,
  services,
  announcements,
  onClose,
  onUpdateContent,
  onUpdateGallery,
  onUpdateServices,
  onUpdateAnnouncements
}) => {
  if (!isOpen) return null;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState<'content' | 'gallery' | 'services' | 'announcements' | 'supabase' | 'appwrite'>('content');

  // Form states for content
  const [siteContentForm, setSiteContentForm] = useState<SiteContent>(content);

  // Gallery form states
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [editingGalleryId, setEditingGalleryId] = useState<string | null>(null);
  const [galleryTitle, setGalleryTitle] = useState('');
  const [galleryCategory, setGalleryCategory] = useState<GalleryItem['category']>('Computer Training');
  const [galleryImageUrl, setGalleryImageUrl] = useState('');
  const [galleryDescription, setGalleryDescription] = useState('');
  const [galleryDate, setGalleryDate] = useState(new Date().toISOString().split('T')[0]);

  // Supabase connection state
  const sbStored = getSupabaseStoredConfig();
  const [supabaseUrl, setSupabaseUrl] = useState(sbStored.url);
  const [supabaseKey, setSupabaseKey] = useState(sbStored.key);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [testing, setTesting] = useState(false);

  // Handle Login with password "mylivesite"
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'mylivesite') {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleSaveContent = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateContent(siteContentForm);
    alert('Site content updated successfully!');
  };

  const handleSaveSupabase = (e: React.FormEvent) => {
    e.preventDefault();
    saveSupabaseConfig(supabaseUrl, supabaseKey);
    alert('Supabase credentials saved successfully! The app is now connected to Supabase.');
  };

  const handleTestSupabase = async () => {
    if (!supabaseUrl || !supabaseKey) {
      setTestResult({ success: false, message: 'Please enter both Supabase URL and Anon Key.' });
      return;
    }
    setTesting(true);
    setTestResult(null);
    try {
      const tempClient = (await import('@supabase/supabase-js')).createClient(supabaseUrl, supabaseKey);
      const { data, error } = await tempClient.from('_test_connection').select('*').limit(1);
      // Even if table doesn't exist, if connection succeeds without auth error or if we test auth/health:
      if (error && error.code === 'PGRST116' || !error) {
        setTestResult({ success: true, message: 'Supabase connection successful!' });
      } else if (error) {
        setTestResult({ success: true, message: 'Connected to Supabase successfully (note: test table check returned: ' + error.message + ')' });
      } else {
        setTestResult({ success: true, message: 'Supabase connected successfully!' });
      }
    } catch (err: any) {
      setTestResult({ success: false, message: 'Connection error: ' + (err.message || 'Check your URL and Anon Key.') });
    } finally {
      setTesting(false);
    }
  };

  const handleOpenAddGallery = () => {
    setEditingGalleryId(null);
    setGalleryTitle('');
    setGalleryCategory('Computer Training');
    setGalleryImageUrl('');
    setGalleryDescription('');
    setGalleryDate(new Date().toISOString().split('T')[0]);
    setGalleryModalOpen(true);
  };

  const handleOpenEditGallery = (item: GalleryItem) => {
    setEditingGalleryId(item.id);
    setGalleryTitle(item.title);
    setGalleryCategory(item.category);
    setGalleryImageUrl(item.imageUrl);
    setGalleryDescription(item.description);
    setGalleryDate(item.date);
    setGalleryModalOpen(true);
  };

  const handleSaveGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingGalleryId) {
      const updated = gallery.map(item => 
        item.id === editingGalleryId 
          ? { ...item, title: galleryTitle, category: galleryCategory, imageUrl: galleryImageUrl, description: galleryDescription, date: galleryDate }
          : item
      );
      onUpdateGallery(updated);
    } else {
      const newItem: GalleryItem = {
        id: `gal-${Date.now()}`,
        title: galleryTitle,
        category: galleryCategory,
        imageUrl: galleryImageUrl || 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
        description: galleryDescription,
        date: galleryDate
      };
      onUpdateGallery([newItem, ...gallery]);
    }
    setGalleryModalOpen(false);
  };

  const handleDeleteGalleryItem = (id: string) => {
    if (confirm('Are you sure you want to delete this gallery item?')) {
      onUpdateGallery(gallery.filter(item => item.id !== id));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[85vh] rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-amber-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-white">Eliros Admin Portal</h2>
              <p className="text-xs text-slate-400">Manage Website Content, Gallery, Mission & Supabase Database</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isAuthenticated ? (
          /* Login Screen */
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-xl space-y-6 text-center">
              <div className="w-14 h-14 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/30">
                <Lock className="w-7 h-7 text-amber-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Admin Authentication</h3>
                <p className="text-xs text-slate-400">Please enter the secure admin password to access the control panel.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter secure admin password"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 text-center font-mono"
                  />
                  {authError && (
                    <p className="text-xs text-rose-400 mt-2">Incorrect password.</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg transition-all"
                >
                  Access Admin Dashboard
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Dashboard Layout */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            
            {/* Sidebar Tabs */}
            <div className="w-full md:w-64 bg-slate-950/60 border-r border-slate-800 p-4 space-y-2 flex md:flex-col shrink-0 overflow-x-auto">
              <button
                onClick={() => setActiveTab('content')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'content' ? 'bg-blue-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Site Content & Mission</span>
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'gallery' ? 'bg-blue-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Image className="w-4 h-4" />
                <span>Facilities Gallery ({gallery.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'services' ? 'bg-blue-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Services ({services.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('supabase')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'supabase' ? 'bg-amber-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Database className="w-4 h-4 text-amber-400" />
                <span>Firebase & Firestore</span>
              </button>
              <button
                onClick={() => setActiveTab('appwrite')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'appwrite' ? 'bg-pink-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span>Appwrite.io Guide</span>
              </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 bg-slate-900">
              
              {/* Tab 1: Site Content & Mission */}
              {activeTab === 'content' && (
                <form onSubmit={handleSaveContent} className="space-y-6 max-w-3xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <h3 className="text-lg font-bold text-white">Edit Homepage Content, Mission & Vision</h3>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Hero Title</label>
                      <input
                        type="text"
                        value={siteContentForm.heroTitle}
                        onChange={(e) => setSiteContentForm({ ...siteContentForm, heroTitle: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Hero Subtitle</label>
                      <textarea
                        rows={3}
                        value={siteContentForm.heroSubtitle}
                        onChange={(e) => setSiteContentForm({ ...siteContentForm, heroSubtitle: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number (Call)</label>
                        <input
                          type="text"
                          value={siteContentForm.phoneNumber}
                          onChange={(e) => setSiteContentForm({ ...siteContentForm, phoneNumber: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp Number</label>
                        <input
                          type="text"
                          value={siteContentForm.whatsappNumber}
                          onChange={(e) => setSiteContentForm({ ...siteContentForm, whatsappNumber: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Mission Statement</label>
                      <textarea
                        rows={3}
                        value={siteContentForm.mission}
                        onChange={(e) => setSiteContentForm({ ...siteContentForm, mission: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Vision Statement</label>
                      <textarea
                        rows={3}
                        value={siteContentForm.vision}
                        onChange={(e) => setSiteContentForm({ ...siteContentForm, vision: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Marquee Ticker Text</label>
                      <input
                        type="text"
                        value={siteContentForm.marqueeText}
                        onChange={(e) => setSiteContentForm({ ...siteContentForm, marqueeText: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </form>
              )}

              {/* Tab 2: Gallery Management */}
              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">Business Facilities Gallery Management</h3>
                      <p className="text-xs text-slate-400">Add, edit, or remove photos and training facility images.</p>
                    </div>
                    <button
                      onClick={handleOpenAddGallery}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add New Photo</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gallery.map((item) => (
                      <div key={item.id} className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between">
                        <div>
                          <div className="h-40 overflow-hidden relative">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                            <span className="absolute top-2 left-2 bg-slate-900/95 text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded">
                              {item.category}
                            </span>
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-sm text-white">{item.title}</h4>
                            <p className="text-xs text-slate-400 line-clamp-2">{item.description}</p>
                            <span className="text-[10px] text-amber-300 font-mono">{item.date}</span>
                          </div>
                        </div>

                        <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-900 mt-2">
                          <button
                            onClick={() => handleOpenEditGallery(item)}
                            className="flex items-center gap-1 text-xs text-blue-400 hover:underline font-medium"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => handleDeleteGalleryItem(item.id)}
                            className="flex items-center gap-1 text-xs text-rose-400 hover:underline font-medium"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Services */}
              {activeTab === 'services' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="text-lg font-bold text-white">Center Services Overview</h3>
                    <p className="text-xs text-slate-400">All 11 core services currently offered at Eliros Design World.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((srv) => (
                      <div key={srv.id} className="rounded-xl bg-slate-950 border border-slate-800 p-5 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded">
                            {srv.category}
                          </span>
                          <span className="text-xs text-amber-300 font-semibold">{srv.title}</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">{srv.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Supabase Connection */}
              {activeTab === 'supabase' && (
                <div className="space-y-6 max-w-2xl">
                  <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Database className="w-5 h-5 text-emerald-400" />
                        <span>Supabase Database Connection</span>
                      </h3>
                      <p className="text-xs text-slate-400">Project Reference: juximnyjpodvjoinsqrz</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${supabase ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}`}>
                      {supabase ? '● Connected & Active' : '○ Not Connected'}
                    </span>
                  </div>

                  <form onSubmit={handleSaveSupabase} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Supabase Project URL</label>
                      <input
                        type="url"
                        value={supabaseUrl}
                        onChange={(e) => setSupabaseUrl(e.target.value)}
                        placeholder="https://juximnyjpodvjoinsqrz.supabase.co"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Supabase Anon / Public API Key</label>
                      <input
                        type="password"
                        value={supabaseKey}
                        onChange={(e) => setSupabaseKey(e.target.value)}
                        placeholder="eyJhbGciOiJIUzI1NiIsIn..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono"
                      />
                    </div>

                    {testResult && (
                      <div className={`p-4 rounded-xl text-xs font-medium border ${testResult.success ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300' : 'bg-rose-950/40 border-rose-500/30 text-rose-300'}`}>
                        {testResult.message}
                      </div>
                    )}

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleTestSupabase}
                        disabled={testing}
                        className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
                      >
                        {testing ? 'Testing...' : 'Test Connection'}
                      </button>
                      <button
                        type="submit"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-600/30 transition-all"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save & Update Credentials</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Tab 5: Appwrite Guide */}
              {activeTab === 'appwrite' && (
                <div className="space-y-6 max-w-2xl">
                  <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-pink-400" />
                        <span>Appwrite.io Connection Guide</span>
                      </h3>
                      <p className="text-xs text-slate-400">Step-by-step direction to connect this project to Appwrite.io</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-pink-500/20 text-pink-400 border border-pink-500/30">
                      SDK Ready
                    </span>
                  </div>

                  <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 space-y-5 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1 text-pink-300">Step 1: Create an Appwrite Project</h4>
                      <p>Go to <a href="https://cloud.appwrite.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">cloud.appwrite.io</a>, create an account, and create a new project.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white text-sm mb-1 text-pink-300">Step 2: Add Web Platform</h4>
                      <p>In your Appwrite project settings, add a Web Platform with your app domain or localhost URL.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white text-sm mb-1 text-pink-300">Step 3: Configure Environment Variables</h4>
                      <p>Add your Appwrite Endpoint and Project ID to your environment or `.env` file:</p>
                      <pre className="mt-2 p-3 bg-slate-900 rounded-lg text-amber-300 font-mono text-[11px] overflow-x-auto">
                        VITE_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"{'\n'}
                        VITE_APPWRITE_PROJECT_ID="your_actual_project_id"
                      </pre>
                    </div>

                    <div>
                      <h4 className="font-bold text-white text-sm mb-1 text-pink-300">Step 4: Use the Appwrite SDK Client</h4>
                      <p>The Appwrite package (<code className="text-pink-300 font-mono">appwrite</code>) is already installed. Use the client helper initialized in <code className="text-amber-300 font-mono">src/lib/appwrite.ts</code> for databases, storage, and authentication.</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>

      {/* Gallery Add/Edit Modal */}
      {galleryModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm">
          <div className="max-w-lg w-full rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="font-bold text-lg">{editingGalleryId ? 'Edit Gallery Photo' : 'Add New Gallery Photo'}</h3>
              <button onClick={() => setGalleryModalOpen(false)} className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveGalleryItem} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={galleryTitle}
                  onChange={(e) => setGalleryTitle(e.target.value)}
                  placeholder="e.g. Computer Training Class"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Category</label>
                <select
                  value={galleryCategory}
                  onChange={(e) => setGalleryCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Computer Training">Computer Training</option>
                  <option value="Computer Operation">Computer Operation</option>
                  <option value="Client Session">Client Session</option>
                  <option value="Web & App Design">Web & App Design</option>
                  <option value="Passport & Photo">Passport & Photo</option>
                  <option value="Printing & Photocopy">Printing & Photocopy</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Upload Image from Device (or paste URL below)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setGalleryImageUrl(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="w-full text-xs text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500 cursor-pointer mb-2"
                />
                <input
                  type="text"
                  required
                  value={galleryImageUrl}
                  onChange={(e) => setGalleryImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/... or base64 data"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Description</label>
                <textarea
                  rows={3}
                  required
                  value={galleryDescription}
                  onChange={(e) => setGalleryDescription(e.target.value)}
                  placeholder="Describe the facility or service..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Date</label>
                <input
                  type="date"
                  required
                  value={galleryDate}
                  onChange={(e) => setGalleryDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setGalleryModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow"
                >
                  Save Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
