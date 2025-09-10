const posts = [
  {
    id: 1,
    title: "Hunting Android Malware with Network IOCs",
    subtitle: "Extract C2s, build rules, and reduce dwell time.",
    author: "Huy Nguyen",
    date: "Sep 9",
    readTime: "8 min read",
    tag: "Malware",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "DFIR Sprint: From Alert to Containment",
    subtitle: "A compact playbook for SIEM + EDR triage.",
    author: "Alice Tran",
    date: "Sep 7",
    readTime: "6 min read",
    tag: "DFIR",
    img: "https://images.unsplash.com/photo-1544198365-3c4b219a8e62?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "CTF: Prototype Pollution → XSS",
    subtitle: "Chain recursive-merge bug into persistent takeover.",
    author: "Minh Le",
    date: "Sep 3",
    readTime: "7 min read",
    tag: "CTF",
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Kubernetes Security Basics",
    subtitle: "10 admission policies that save you hours.",
    author: "Minh Le",
    date: "Aug 27",
    readTime: "9 min read",
    tag: "CloudSec",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
  },
];

const topics = ["Malware", "DFIR", "CTF", "CloudSec", "Threat Intel", "AppSec", "SIEM"];

function Header() {
  return (
    React.createElement('header', { className: 'header' },
      React.createElement('div', { className: 'header-inner' }, [
        React.createElement('div', { className: 'brand', key: 'brand' }, [
          React.createElement('div', { className: 'brand-badge', key: 'b' }, 'S'),
          React.createElement('div', { key: 't' }, 'SyberShare')
        ]),
        React.createElement('nav', { className: 'nav', key: 'nav' }, [
          React.createElement('a', { href: '#', key: 'home' }, 'Home'),
          React.createElement('a', { href: '#', key: 'tr' }, 'Trending'),
          React.createElement('a', { href: '#', key: 'tp' }, 'Topics'),
        ]),
        React.createElement('div', { style: { display:'flex', gap:'10px', alignItems:'center' }, key:'right' }, [
          React.createElement('div', { className: 'search', key:'search' }, [
            React.createElement('span', { key:'icon', style:{opacity:.6}}, '🔎'),
            React.createElement('input', { key:'input', placeholder: 'Search SyberShare' })
          ]),
          React.createElement('button', { className: 'cta', key:'cta' }, 'Get started')
        ])
      ])
    )
  );
}

function Hero() {
  return (
    React.createElement('section', { className: 'hero' },
      React.createElement('div', { className: 'hero-inner' }, [
        React.createElement('div', { key:'left' }, [
          React.createElement('h1', { key: 'h1' }, 'Where defenders share, learn, and grow.'),
          React.createElement('p', { key: 'p' }, 'Discover stories on malware analysis, DFIR, detection engineering, cloud security, and more — written by practitioners for practitioners.')
        ]),
        React.createElement('div', { className: 'hero-card', key:'right' }, [
          React.createElement('h3', { key:'h3' }, 'Trending on SyberShare'),
          React.createElement('ol', { className:'hero-list', key:'ol' }, posts.slice(0,3).map((p, i) => (
            React.createElement('li', { key: p.id }, [
              React.createElement('div', { className:'rank', key:'r' }, `0${i+1}`),
              React.createElement('div', { key:'info' }, [
                React.createElement('div', { style:{fontWeight:600}, key:'t' }, p.title),
                React.createElement('div', { className:'meta', key:'m' }, `${p.date} · ${p.readTime}`),
              ])
            ])
          )))
        ])
      ])
    )
  );
}

function PostCard({ post }) {
  return (
    React.createElement('article', { className: 'card' }, [
      React.createElement('div', { key:'left' }, [
        React.createElement('h3', { key:'h3' }, post.title),
        React.createElement('p', { key:'p' }, post.subtitle),
        React.createElement('div', { className:'meta', key:'meta' }, [
          React.createElement('span', { key:'a' }, post.author),
          React.createElement('span', { key:'dot' }, '·'),
          React.createElement('span', { key:'d' }, post.date),
          React.createElement('span', { key:'dot2' }, '·'),
          React.createElement('span', { key:'r' }, post.readTime),
          React.createElement('span', { className:'tag', key:'tag' }, post.tag),
        ])
      ]),
      React.createElement('div', { key:'right' },
        React.createElement('img', { className:'thumb', src: post.img, alt: post.title })
      )
    ])
  );
}

function Sidebar() {
  return (
    React.createElement('aside', { className: 'sidebox' }, [
      React.createElement('h4', { key:'h4' }, 'Recommended topics'),
      React.createElement('div', { className:'pills', key:'pills' },
        topics.map(t => React.createElement('span', { key:t, className:'pill' }, t))
      )
    ])
  );
}

function App() {
  return (
    React.createElement(React.Fragment, null,
      React.createElement(Header),
      React.createElement(Hero),
      React.createElement('main', { className: 'container' }, [
        React.createElement('section', { key:'feed' }, posts.map(p => React.createElement(PostCard, { key:p.id, post:p }))),
        React.createElement('div', { key:'sidebar' }, React.createElement(Sidebar))
      ])
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));