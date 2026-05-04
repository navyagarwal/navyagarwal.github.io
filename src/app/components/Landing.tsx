import { Mail, MapPin, Github, Linkedin, FileText } from 'lucide-react';

export function Landing() {
  const timeline = [
    {
      event: "started as software engineer",
      place: "Motorq",
      date: "2024-01-15",
    },
    {
      event: "started undergrad",
      place: "University Name",
      date: "2020-08-01",
    },
    {
      event: "joined as intern",
      place: "Previous Company",
      date: "2023-06-01",
    },
  ];

  const projects = [
    {
      title: "Project One",
      description: "Built a thing that does something interesting. Learned about X, Y, and Z in the process.",
      year: "2024",
    },
    {
      title: "Project Two",
      description: "Created something cool with friends. It was challenging but rewarding.",
      year: "2023",
    },
    {
      title: "Project Three",
      description: "Experimented with new technology and made something fun.",
      year: "2023",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="shrink-0">
            <img
              src="/display_picture.jpg"
              alt="Navya Agarwal"
              className="w-48 h-48 rounded-2xl object-cover border border-pink-200/50"
            />
          </div>

          <div className="flex-1">

            <p className="text-lg text-foreground leading-relaxed mb-6">
              A few sentences about yourself, your interests, and what drives you.
              What makes you unique? What are you passionate about? This is your space
              to introduce yourself beyond the resume.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-foreground">
                <MapPin size={18} className="text-primary" />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Mail size={18} className="text-primary" />
                <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                  navya.agarwal.in@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/navyagarwal"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all flex items-center justify-center text-foreground"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/navya-agarwal-/"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all flex items-center justify-center text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://drive.google.com/file/d/19RweCeODDP9dbA6fqJzfedaO1-U4Oyrb/view?usp=drive_link"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all flex items-center justify-center text-foreground"
                aria-label="Resume"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="flex flex-wrap gap-x-8 gap-y-6">
          {timeline.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((item, index) => (
            <div key={index} className="group">
              <div className="flex items-baseline gap-2">
                <span className="text-foreground/60">{formatDate(item.date)}</span>
                <span className="text-foreground/40">→</span>
                <span className="text-foreground">{item.event}</span>
                <span className="text-primary">@{item.place}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-lg p-6 border border-pink-200/30 hover:border-primary/40 transition-all h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
