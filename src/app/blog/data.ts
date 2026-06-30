export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  thumbnail: string;
  excerpt: string;
  content: string;
}

export const blogCategories = [
  "All",
  "BCA Journey",
  "Web Development",
  "Python Learning",
  "Tech News",
  "Travel Stories",
  "Random Blogs",
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "my-bca-journey",
    title: "My BCA Journey – Building Skills Beyond the Classroom",
    category: "BCA Journey",
    date: "March 15, 2024",
    readTime: "5 min read",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    excerpt: "A personal look into my 4th semester of BCA, learning programming, and becoming a better developer.",
    content: `
      <h2>The Beginning of Something New</h2>
      <p>When I first enrolled in the BCA (Bachelor of Computer Applications) program, I thought it would just be about reading textbooks and passing exams. But as I progressed, especially now in my 4th semester, I realized it's so much more than that. It's about problem-solving, logical thinking, and building things from scratch.</p>

      <h2>Learning Beyond the Syllabus</h2>
      <p>The classroom gave me the foundation, but the real learning happened when I started working on my own projects. I spent countless nights debugging code, watching tutorials, and reading documentation. It wasn't always easy, but the satisfaction of finally getting a program to run smoothly was totally worth it.</p>

      <h2>Building Real Projects</h2>
      <p>From simple command-line tools to full-fledged web applications, building projects has been the most crucial part of my journey. It helped me understand how different technologies work together and gave me practical experience that textbooks couldn't provide.</p>

      <h2>Looking Ahead</h2>
      <p>As I continue my BCA journey, my focus is on improving my problem-solving skills, participating in hackathons, and collaborating with other developers. The learning never stops, and I'm excited for what the future holds.</p>
    `
  },
  {
    id: "2",
    slug: "started-web-development",
    title: "How I Started My Web Development Journey",
    category: "Web Development",
    date: "April 2, 2024",
    readTime: "6 min read",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    excerpt: "From HTML basics to modern frontend frameworks, here is how I learned to build responsive websites.",
    content: `
      <h2>The First Hello World</h2>
      <p>My web development journey started with a simple <code>&lt;h1&gt;Hello World&lt;/h1&gt;</code>. I was fascinated by how a few lines of code could create something visible on a browser. That curiosity led me to dive deep into the world of web development.</p>

      <h2>Mastering the Basics: HTML, CSS, JavaScript</h2>
      <p>I spent the first few months mastering the holy trinity of the web. I built simple static pages with HTML, styled them with CSS to make them look good, and finally added interactivity with JavaScript. Learning about the DOM, events, and responsive design was a game-changer.</p>

      <h2>Embracing Modern Frameworks</h2>
      <p>Once I was comfortable with Vanilla JS, I explored modern frontend libraries like React and Next.js. The component-based architecture made so much sense. It completely changed the way I thought about building user interfaces.</p>

      <h2>The Continuous Learning Process</h2>
      <p>Web development is an ever-evolving field. There's always a new framework or tool to learn. But having a strong foundation has made it easier to adapt to these changes. Today, I'm building full-stack applications and constantly improving my skills.</p>
    `
  },
  {
    id: "3",
    slug: "python-favorite-language",
    title: "Why Python Became My Favorite Learning Language",
    category: "Python Learning",
    date: "April 20, 2024",
    readTime: "4 min read",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
    excerpt: "Discussing Python basics, loops, automation ideas, and why it is the best language for beginners.",
    content: `
      <h2>Love at First Print</h2>
      <p>I still remember the first time I wrote <code>print("Hello, Python!")</code>. It was so clean and readable compared to other languages I had tried. Python felt less like writing complex machine instructions and more like writing structured English.</p>

      <h2>The Power of Simplicity</h2>
      <p>Learning loops, functions, and data structures in Python was a breeze. The syntax is designed to be intuitive, allowing beginners to focus on the logic rather than fighting with semicolons and curly braces.</p>

      <h2>Building Automation Scripts</h2>
      <p>What really made me fall in love with Python was its utility. I started writing small scripts to automate repetitive tasks—like renaming files, scraping data from websites, and organizing my folders. Seeing code actually save me time in real life was incredible.</p>

      <h2>Beyond the Basics</h2>
      <p>Python isn't just for beginners. As my skills grew, I explored its massive ecosystem of libraries. Whether it's data analysis, artificial intelligence, or web backends, Python has a tool for everything. It’s a language that grows with you.</p>
    `
  },
  {
    id: "4",
    slug: "india-2026-tech-trends",
    title: "India 2026 – Future Tech Trends and Innovations",
    category: "Tech News",
    date: "May 5, 2024",
    readTime: "7 min read",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    excerpt: "Exploring the realistic future of AI, startups, smart cities, and digital innovation in India.",
    content: `
      <h2>The Rise of AI and Automation</h2>
      <p>By 2026, Artificial Intelligence won't just be a buzzword in India; it will be deeply integrated into our daily lives. From smart customer service bots in local startups to AI-driven healthcare diagnostics in rural areas, the growth is going to be exponential.</p>

      <h2>The Startup Ecosystem Boom</h2>
      <p>India is already a global hub for startups, and this trend is only accelerating. We'll see more innovations in fintech, edtech, and agritech. Young entrepreneurs are solving local problems with global tech standards, pushing the boundaries of what's possible.</p>

      <h2>Electric Vehicles and Smart Cities</h2>
      <p>The transition to sustainable energy is happening fast. Electric vehicles (EVs) are becoming common on Indian roads, supported by a growing network of charging stations. Smart cities are utilizing IoT devices for better traffic management, waste disposal, and energy efficiency.</p>

      <h2>A Digitally Empowered Nation</h2>
      <p>The digital infrastructure, built upon initiatives like UPI, is expanding. We are moving towards a society where every citizen has access to digital services, enabling seamless transactions and access to global information. The tech landscape of India in 2026 looks bright, innovative, and highly inclusive.</p>
    `
  },
  {
    id: "5",
    slug: "trip-to-rishikesh",
    title: "A Trip to Rishikesh – Mountains, River and Peace",
    category: "Travel Stories",
    date: "May 18, 2024",
    readTime: "5 min read",
    thumbnail: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop",
    excerpt: "A travel experience full of nature, river views, adventure, and the peaceful atmosphere of Rishikesh.",
    content: `
      <h2>Escape to the Mountains</h2>
      <p>Sometimes, you just need to step away from the screen and breathe in the fresh mountain air. My recent trip to Rishikesh was exactly that—a much-needed escape from the daily grind. The moment I arrived, the majestic Himalayas and the sound of the flowing Ganga river instantly calmed my mind.</p>

      <h2>Adventures and Experiences</h2>
      <p>Rishikesh is known as the adventure capital of India for a reason. White-water rafting was an exhilarating experience that pushed my boundaries. But it wasn't all adrenaline; sitting by the ghats during the evening Aarti was deeply spiritual and peaceful.</p>

      <h2>Local Flavors</h2>
      <p>The local food was a delight. From sitting in cozy cafes overlooking the river to eating simple, delicious street food, every meal was memorable. The culture is vibrant, welcoming, and deeply rooted in tradition.</p>

      <h2>Bringing the Peace Back Home</h2>
      <p>This trip reminded me of the importance of disconnecting to reconnect with oneself. The serenity of Rishikesh gave me a new perspective and renewed energy to tackle my projects back home.</p>
    `
  },
  {
    id: "6",
    slug: "changed-my-daily-routine",
    title: "Things That Changed My Daily Routine",
    category: "Random Blogs",
    date: "June 1, 2024",
    readTime: "4 min read",
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    excerpt: "A casual lifestyle blog about productivity habits, learning, and my journey of personal growth.",
    content: `
      <h2>The Need for Change</h2>
      <p>There was a point where my days blurred together. Wake up, code, eat, sleep, repeat. I realized I was being busy, but not truly productive. I needed a change in my daily routine to improve my focus, health, and overall well-being.</p>

      <h2>Small Habits, Big Impact</h2>
      <p>I started small. Waking up just 30 minutes earlier gave me time to plan my day before the rush started. I incorporated a short morning walk, which surprisingly boosted my energy more than my usual cup of coffee. I also started using the Pomodoro technique for studying and coding, taking regular breaks to avoid burnout.</p>

      <h2>Digital Detox</h2>
      <p>One of the biggest changes was setting boundaries with technology. I disabled non-essential notifications on my phone and made a rule: no screens an hour before bed. Instead, I spent that time reading a book or reflecting on the day. My sleep quality improved drastically.</p>

      <h2>Continuous Growth</h2>
      <p>Changing a routine isn't about being perfect every day; it's about consistency. These small habits have not only made me a more efficient developer but a happier person overall. Personal growth is a journey, and I'm enjoying the ride.</p>
    `
  }
];
