import { Outlet, Link, useLocation } from "react-router";

export function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl text-foreground hover:text-primary transition-colors">
            navya agarwal
          </Link>

          <div className="flex gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                location.pathname === '/'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              about
            </Link>
            <Link
              to="/gallery"
              className={`transition-colors ${
                location.pathname === '/gallery'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              gallery
            </Link>
            <Link
              to="/blog"
              className={`transition-colors ${
                location.pathname === '/blog'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              blog
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
