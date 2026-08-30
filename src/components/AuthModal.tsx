import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  User, 
  Key, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  LogOut,
  X,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { supabase, SUPABASE_REDIRECT_URL, UserProfile } from '../lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onAuthSuccess: (user: UserProfile) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onAuthSuccess,
  onLogout
}) => {
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState<'siswa' | 'guru' | 'alumni' | 'calon_siswa'>('siswa');
  const [major, setMajor] = useState('TKJ');
  const [nisn, setNisn] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [showGoogleGuide, setShowGoogleGuide] = useState(false);

  if (!isOpen) return null;

  // Real Google Sign-In via Supabase OAuth
  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setErrorMsg(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });
    if (error) {
      console.error('Error logging in:', error.message);
      setErrorMsg(error.message);
    }
    setGoogleLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (data?.user) {
        const metadata = data.user.user_metadata || {};
        const profile: UserProfile = {
          id: data.user.id,
          email: data.user.email || email,
          fullName: metadata.full_name || metadata.name || email.split('@')[0],
          role: metadata.role || 'siswa',
          major: metadata.major || 'TKJ',
          nisnOrNip: metadata.nisn || '2026-BM1-001',
          avatarUrl: metadata.avatar_url || metadata.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
        };
        onAuthSuccess(profile);
        setSuccessMsg('Login Berhasil! Selamat datang kembali.');
        setTimeout(() => {
          onClose();
        }, 1200);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Email atau kata sandi tidak sesuai. Silakan periksa kembali.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: SUPABASE_REDIRECT_URL,
          data: {
            full_name: fullName,
            role,
            major,
            nisn,
          }
        }
      });

      if (error) {
        throw error;
      }

      const registeredUser: UserProfile = {
        id: data?.user?.id || 'user-' + Date.now(),
        email,
        fullName: fullName || 'Siswa Baru',
        role,
        major,
        nisnOrNip: nisn || '2026-BM1-REG',
        avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
      };

      onAuthSuccess(registeredUser);
      setSuccessMsg('Pendaftaran Akun Berhasil! Akun Anda telah terdaftar di sistem Supabase.');
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err: any) {
      setErrorMsg(err.message || 'Pendaftaran gagal. Silakan coba kembali.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: SUPABASE_REDIRECT_URL,
      });

      if (error) {
        throw error;
      }

      setSuccessMsg(`Tautan reset kata sandi telah dikirimkan ke email ${email}. Silakan periksa kotak masuk/spam Anda.`);
    } catch (err: any) {
      setErrorMsg(err.message || 'Gagal memproses permohonan reset sandi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95 duration-200 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LOGGED IN VIEW */}
        {currentUser ? (
          <div className="space-y-6 text-center py-4">
            <div className="w-20 h-20 rounded-full mx-auto overflow-hidden border-4 border-blue-500 shadow-md bg-blue-50">
              <img 
                src={currentUser.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'} 
                alt={currentUser.fullName}
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Akun Supabase & Google Aktif</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">{currentUser.fullName}</h3>
              <p className="text-xs text-slate-500">{currentUser.email}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs">
              <div>
                <span className="text-slate-400 text-[11px] block">Peran / Status:</span>
                <span className="font-bold text-slate-800 capitalize">{currentUser.role}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">Program Keahlian:</span>
                <span className="font-bold text-blue-700">{currentUser.major || 'TKJ'}</span>
              </div>
              {currentUser.nisnOrNip && (
                <div className="col-span-2 pt-2 border-t border-slate-200">
                  <span className="text-slate-400 text-[11px] block">Nomor Induk (NISN / NIP / ID):</span>
                  <span className="font-mono font-bold text-slate-800">{currentUser.nisnOrNip}</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
              >
                Lanjut ke Portal Siswa
              </button>
              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="px-5 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 border border-red-200 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout / Keluar</span>
              </button>
            </div>
          </div>
        ) : (
          /* AUTH FORM (LOGIN / DAFTAR / LUPA PASSWORD) */
          <>
            {/* Header */}
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Portal Akun SMK Budi Murni 1</h3>
                  <p className="text-[11px] text-slate-500">
                    Masuk dengan Akun Google atau Email Terdaftar
                  </p>
                </div>
              </div>
            </div>

            {/* REAL GOOGLE LOGIN BUTTON (OFFICIAL BRANDED) */}
            <div className="space-y-2">
              <button
                id="btn-google-signin"
                type="button"
                onClick={handleGoogleLogin}
                disabled={googleLoading}
                className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-2xl border-2 border-slate-200 shadow-sm hover:border-slate-300 transition-all flex items-center justify-center gap-3 group active:scale-98 disabled:opacity-50"
              >
                {/* Official Google Vector Logo */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>
                  {googleLoading ? 'Menghubungkan ke Google...' : 'Masuk dengan Akun Google (Google Login)'}
                </span>
              </button>

              <div className="flex items-center gap-2 my-2">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-[11px] text-slate-400 font-semibold uppercase">atau masuk dengan email</span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => { setAuthMode('login'); setErrorMsg(null); setSuccessMsg(null); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  authMode === 'login' 
                    ? 'bg-white text-blue-700 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Masuk / Login
              </button>
              <button
                type="button"
                onClick={() => { setAuthMode('register'); setErrorMsg(null); setSuccessMsg(null); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  authMode === 'register' 
                    ? 'bg-white text-blue-700 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Daftar Akun
              </button>
              <button
                type="button"
                onClick={() => { setAuthMode('forgot'); setErrorMsg(null); setSuccessMsg(null); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  authMode === 'forgot' 
                    ? 'bg-white text-blue-700 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Lupa Password
              </button>
            </div>

            {/* Notification Messages */}
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* FORM: LOGIN */}
            {authMode === 'login' && (
              <form onSubmit={handleLogin} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    Email Terdaftar *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@smkbudimurni1.sch.id / email anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="font-bold text-slate-700 flex items-center gap-1.5">
                      <Key className="w-3.5 h-3.5 text-blue-600" />
                      Kata Sandi (Password) *
                    </label>
                    <button
                      type="button"
                      onClick={() => setAuthMode('forgot')}
                      className="text-[11px] font-semibold text-blue-600 hover:underline"
                    >
                      Lupa password?
                    </button>
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Memproses Login...</span>
                  ) : (
                    <>
                      <span>Masuk ke Portal Sekolah</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* FORM: REGISTER */}
            {authMode === 'register' && (
              <form onSubmit={handleRegister} className="space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Lengkap Anda"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Status / Peran *</label>
                    <select
                      value={role}
                      onChange={(e: any) => setRole(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    >
                      <option value="siswa">Siswa Aktif</option>
                      <option value="calon_siswa">Calon Siswa (PPDB)</option>
                      <option value="alumni">Alumni</option>
                      <option value="guru">Guru / Tenaga Pendidik</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Jurusan *</label>
                    <select
                      id="auth-select-major"
                      value={major}
                      onChange={(e) => setMajor(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    >
                      <option value="TKJ">TKJ</option>
                      <option value="TKR">TKR</option>
                      <option value="TBSM">TBSM</option>
                      <option value="TITL">TITL</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Nomor Induk (NISN / NIK / NIP)</label>
                  <input
                    type="text"
                    placeholder="Contoh: 0087654321"
                    value={nisn}
                    onChange={(e) => setNisn(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    Email Aktif *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email.aktif@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-blue-600" />
                    Buat Kata Sandi *
                  </label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    placeholder="Minimal 6 karakter"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {loading ? 'Mendaftarkan Akun...' : 'Daftar Akun Baru'}
                </button>
              </form>
            )}

            {/* FORM: FORGOT PASSWORD */}
            {authMode === 'forgot' && (
              <form onSubmit={handleForgotPassword} className="space-y-4 text-xs">
                <div className="p-3 bg-amber-50 rounded-xl text-amber-900 text-[11px] leading-relaxed border border-amber-200">
                  Masukkan email yang Anda gunakan saat mendaftar. Sistem Supabase akan mengirimkan tautan verifikasi pemulihan kata sandi ke:
                  <br />
                  <code className="text-blue-700 font-mono text-[10px] break-all">{SUPABASE_REDIRECT_URL}</code>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    Email Terdaftar *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email.anda@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                  >
                    Kembali Login
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                  >
                    {loading ? 'Mengirim Link...' : 'Kirim Link Reset'}
                  </button>
                </div>
              </form>
            )}

            {/* Google OAuth Supabase Configuration Guide Accordion */}
            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowGoogleGuide(!showGoogleGuide)}
                className="w-full flex items-center justify-between text-[11px] text-slate-500 hover:text-blue-700 font-medium py-1"
              >
                <span className="flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                  Panduan Menghubungkan Google Console & Supabase
                </span>
                {showGoogleGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showGoogleGuide && (
                <div className="mt-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-2 text-left">
                  <p className="font-bold text-slate-800">Langkah Menghubungkan Google OAuth Resmi:</p>
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>Buka <strong>Google Cloud Console</strong> &gt; <em>Credentials</em> &gt; <em>OAuth 2.0 Client IDs</em>.</li>
                    <li>Tambahkan <strong>Authorized redirect URIs</strong>:
                      <br />
                      <code className="text-blue-700 font-mono text-[10px] bg-blue-50 px-1.5 py-0.5 rounded block my-0.5 break-all">
                        https://zcaroqflucuodbysxrnx.supabase.co/auth/v1/callback
                      </code>
                    </li>
                    <li>Salin <strong>Client ID</strong> dan <strong>Client Secret</strong>.</li>
                    <li>Buka <strong>Supabase Dashboard</strong> &gt; <em>Authentication</em> &gt; <em>Providers</em> &gt; Aktifkan <strong>Google</strong> dan tempelkan Client ID & Secret tersebut.</li>
                  </ol>
                </div>
              )}
            </div>

            {/* Footer Notice */}
            <div className="border-t border-slate-100 pt-2 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <span>Keamanan terenkripsi oleh</span>
              <span className="font-bold text-emerald-600">Supabase Auth & Google OAuth</span>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
