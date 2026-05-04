const galleryItems = [
  { type: 'paintings', title: 'Bird on Branch', description: 'Watercolor painting inspired by nature.', imageUrl: 'https://images.unsplash.com/photo-1703587820568-9fe0321a592e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { type: 'me', title: 'Portrait', description: 'A portrait moment.', imageUrl: 'https://images.unsplash.com/photo-1686044905964-f0c1e55be7ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { type: 'paintings', title: 'Abstract Landscape', description: 'Earthy tones and textures.', imageUrl: 'https://images.unsplash.com/photo-1750327324364-6700eab9ad7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { type: 'me', title: 'Green Day', description: 'One of my favorite captures.', imageUrl: 'https://images.unsplash.com/photo-1616240935766-3ae6a1009f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { type: 'paintings', title: 'Sailboats', description: 'Abstract seascape study.', imageUrl: 'https://images.unsplash.com/photo-1713731267883-2e1486c3469b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { type: 'me', title: 'Studio Time', description: 'Making and thinking.', imageUrl: 'https://images.unsplash.com/photo-1656107757623-90be1e38db91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { type: 'paintings', title: 'Green Hills', description: 'Landscape exploration in green.', imageUrl: 'https://images.unsplash.com/photo-1713813879071-6d4bd86de919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { type: 'paintings', title: 'House & Trees', description: 'Countryside scene.', imageUrl: 'https://images.unsplash.com/photo-1703587820516-9836062c8172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' }
];
const blogPosts = [
  { id: '1', title: 'First Blog Post Title', date: 'March 15, 2024', excerpt: 'A short excerpt or introduction to what this post is about. Something interesting that makes people want to read more.', body: 'A short excerpt or introduction to what this post is about. Something interesting that makes people want to read more. This is the full post body in static mode.' },
  { id: '2', title: 'Another Interesting Post', date: 'February 28, 2024', excerpt: 'More thoughts on something. Could be technical, creative, or personal. Whatever you want to share.', body: 'More thoughts on something. Could be technical, creative, or personal. Whatever you want to share. This is the full post body in static mode.' },
  { id: '3', title: 'Thoughts on Something', date: 'January 10, 2024', excerpt: 'Writing about experiences, learnings, or just random musings.', body: 'Writing about experiences, learnings, or just random musings. This is the full post body in static mode.' }
];
const timelineItems = [
  { date: 'May 2025', event: 'started as a full time software engineer', place: 'Motorq' },
  { date: 'May 2025', event: 'finished my b.tech. major project and graduated with a 9.23 GPA woohoo' },
  { date: 'Jan 2025', event: 'joined as a research assistant', place: 'MISN Lab, IIT Delhi' },
  { date: 'Aug 2024', event: 'received full-time offer based on performance and continued working as a co-op intern', place: 'Motorq' },
  { date: 'May 2024', event: 'started as a software engineering summer intern', place: 'Motorq' },
  { date: 'May 2024', event: 'joined as a research assistant', place: 'FSIL Lab, Georgia Tech' },
  { date: 'Jan 2024', event: 'started as an ML engineering intern', place: 'Corteva Agriscience' },
  { date: 'May 2023', event: 'funded by the Software Freedom Conservancy, as part of the Outreachy program to work on OSS', place: 'NetworkX' },
  { date: 'Dec 2022', event: 'published my first research paper!' },
  { date: 'Jan 2022', event: 'joined as a CS engg undergrad', place: 'IGDTUW' }
];
const projectItems = [
  { id: '1', title: 'Project One', year: '2024', description: 'Built a thing that does something interesting. Learned about X, Y, and Z in the process.', imageUrl: '', link: '' },
  { id: '2', title: 'Project Two', year: '2023', description: 'Created something cool with friends. It was challenging but rewarding.', imageUrl: '', link: '' },
  { id: '3', title: 'Project Three', year: '2023', description: 'Experimented with new technology and made something fun.', imageUrl: '', link: '' },
  { id: '4', title: 'Project Four (sample)', year: '2025', description: 'This sample project shows how flexible this modal can be: you can keep it short, write a longer narrative, add an image preview, and include an external link. Useful when each project has a different mix of assets and context.', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280', link: 'https://github.com/' }
];

const grid = document.getElementById('gallery-grid');
const blogList = document.getElementById('blog-list');
const blogPostTitle = document.getElementById('blog-post-title');
const blogPostMeta = document.getElementById('blog-post-meta');
const blogPostBody = document.getElementById('blog-post-body');
const timelineList = document.getElementById('timeline-list');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightboxBtn = document.getElementById('lightbox-close');
const projectModal = document.getElementById('project-modal');
const closeProjectModalBtn = document.getElementById('project-modal-close');
const projectModalImage = document.getElementById('project-modal-image');
const projectModalTitle = document.getElementById('project-modal-title');
const projectModalYear = document.getElementById('project-modal-year');
const projectModalDescription = document.getElementById('project-modal-description');
const projectModalLinkWrap = document.getElementById('project-modal-link-wrap');
const projectModalLink = document.getElementById('project-modal-link');

function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
}
function closeProjectModal() {
  if (!projectModal) return;
  projectModal.hidden = true;
}

function renderGallery(filter) {
  const items = galleryItems.filter((item) => item.type === filter);
  grid.innerHTML = items
    .map((item) => `<div class="gallery-card"><img src="${item.imageUrl}" alt="${item.title}" data-title="${item.title}" data-description="${item.description || ''}" /></div>`)
    .join('');
}

function setActiveFilter(filter) {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderGallery(filter);
}

function renderBlogList() {
  if (!blogList) return;
  blogList.innerHTML = blogPosts.map((post) => `
    <article>
      <a href="#/blog/${post.id}">
        <h2>${post.title}</h2>
        <p class="muted">${post.date}</p>
        <p>${post.excerpt}</p>
      </a>
    </article>
  `).join('');
}

function renderTimeline() {
  if (!timelineList) return;
  timelineList.innerHTML = timelineItems.map((item) => {
    const placeText = item.place ? ` <span class="primary">@${item.place}</span>` : '';
    return `<p><span class="muted">${item.date}</span> <span class="dot"></span> <span class="timeline-content">${item.event}${placeText}</span></p>`;
  }).join('');
}

function getRoute() {
  const hash = window.location.hash || '#/';
  return hash.replace(/^#/, '') || '/';
}

function renderRoute() {
  const route = getRoute();
  const isBlogPost = route.startsWith('/blog/');
  const viewKey = isBlogPost ? '/blog-post' : route;
  document.querySelectorAll('.view').forEach((view) => {
    view.hidden = view.dataset.view !== viewKey;
  });
  document.querySelectorAll('[data-route-link]').forEach((link) => {
    const linkRoute = link.dataset.routeLink;
    const active = route === linkRoute || (isBlogPost && linkRoute === '/blog');
    link.classList.toggle('active', active);
  });

  if (isBlogPost) {
    const postId = route.split('/')[2];
    const post = blogPosts.find((item) => item.id === postId);
    if (post && blogPostTitle && blogPostMeta && blogPostBody) {
      blogPostTitle.textContent = post.title;
      blogPostMeta.textContent = post.date;
      blogPostBody.textContent = post.body;
    }
  }
}

document.querySelectorAll('[data-project-id]').forEach((card) => {
  card.addEventListener('click', () => {
    const project = projectItems.find((item) => item.id === card.dataset.projectId);
    if (!project || !projectModal || !projectModalTitle || !projectModalYear || !projectModalDescription || !projectModalImage || !projectModalLinkWrap || !projectModalLink) return;
    projectModalTitle.textContent = project.title;
    projectModalYear.textContent = project.year;
    projectModalDescription.textContent = project.description;

    if (project.imageUrl) {
      projectModalImage.src = project.imageUrl;
      projectModalImage.hidden = false;
    } else {
      projectModalImage.hidden = true;
      projectModalImage.removeAttribute('src');
    }

    if (project.link) {
      projectModalLink.href = project.link;
      projectModalLinkWrap.hidden = false;
    } else {
      projectModalLinkWrap.hidden = true;
      projectModalLink.removeAttribute('href');
    }
    projectModal.hidden = false;
  });
});

document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => setActiveFilter(btn.dataset.filter));
});

if (grid && lightbox && lightboxImage && lightboxCaption) {
  grid.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const image = target.closest('img');
    if (!image) return;
    lightboxImage.src = image.src;
    const title = image.dataset.title || '';
    const description = image.dataset.description || '';
    lightboxCaption.textContent = description ? `${title}: ${description}` : title;
    lightbox.hidden = false;
  });
}

if (closeLightboxBtn) {
  closeLightboxBtn.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
    closeProjectModal();
  }
});

if (closeProjectModalBtn) {
  closeProjectModalBtn.addEventListener('click', closeProjectModal);
}
if (projectModal) {
  projectModal.addEventListener('click', (event) => {
    if (event.target === projectModal) closeProjectModal();
  });
}

window.addEventListener('hashchange', renderRoute);

setActiveFilter('me');
renderBlogList();
renderTimeline();
renderRoute();
closeLightbox();
closeProjectModal();
