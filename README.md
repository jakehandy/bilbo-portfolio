# Bilbo Baggins Portfolio Website

A responsive, minimal personal portfolio website showcasing the adventures and accomplishments of Bilbo Baggins, legendary adventurer and professional burglar of Middle-earth.

## 🎒 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, minimal design with smooth animations and transitions
- **Interactive Work Cards**: Expandable portfolio cards that reveal detailed project information
- **Single Page Application**: Smooth scrolling navigation between sections
- **Contact Form**: Functional contact form with validation and user feedback
- **Accessibility**: Keyboard navigation support and ARIA labels for screen readers
- **Performance Optimized**: Lightweight vanilla JavaScript with debounced scroll handlers

## 📋 Sections

### Home
- Hero section with introduction
- About section highlighting skills and background
- Call-to-action buttons

### Work (Portfolio)
- Six featured adventure projects:
  - The Quest for Erebor
  - Discovery of the One Ring
  - The Mirkwood Rescue
  - There and Back Again (Memoir)
  - The Battle of Five Armies
  - Cultural Integration & Mentorship
- Expandable cards with detailed project information
- Skills tags for each project

### Contact
- Contact information display
- Functional contact form with validation
- Social media links
- Response messaging for form submission

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required - pure HTML, CSS, and JavaScript!

### Installation

1. Clone or download this repository:
```bash
git clone <repository-url>
cd bilbo-portfolio
```

2. Open the `index.html` file in your web browser:
```bash
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

Or simply drag and drop the `index.html` file into your browser.

### Live Server (Optional)
For the best development experience, you can use a local server:

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## 📁 Project Structure

```
bilbo-portfolio/
├── index.html          # Main HTML file with all page sections
├── styles.css          # Complete styling and responsive design
├── script.js           # Interactive functionality
└── README.md          # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: #2c3e50 (Dark slate blue)
- **Secondary**: #34495e (Darker slate)
- **Accent**: #3498db (Bright blue)
- **Background**: #ffffff (White)
- **Background Alt**: #f8f9fa (Light gray)
- **Text**: #2c3e50 (Dark slate)
- **Text Light**: #7f8c8d (Medium gray)

### Typography
- **Font Family**: Inter (with system font fallbacks)
- **Base Size**: 16px
- **Responsive scaling**: Adjusts for mobile devices

### Spacing System
- Uses CSS custom properties for consistent spacing
- Scale: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (ES6+)**: Vanilla JS with no dependencies
- **Google Fonts**: Inter font family
- **CSS Custom Properties**: For theming and consistency

## ✨ Key Features Implementation

### Expandable Cards
Cards expand/collapse smoothly with CSS transitions and JavaScript toggle functionality. Click on any work card to reveal full project details.

### Smooth Scrolling
Navigation links smoothly scroll to their target sections with offset for the fixed navbar.

### Active Navigation
The navigation automatically highlights the current section as you scroll through the page.

### Mobile Navigation
Responsive hamburger menu for mobile devices with smooth slide-in animation.

### Form Validation
Contact form includes HTML5 validation with custom JavaScript for enhanced UX and feedback.

### Performance
- Debounced scroll event listeners
- Intersection Observer for efficient animations
- Minimal DOM manipulation
- No external JavaScript dependencies

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support (Tab, Enter, Space)
- Focus indicators for keyboard users
- Reduced motion support for users with motion sensitivity
- Sufficient color contrast ratios
- Alt text for images/icons

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `styles.css`:

```css
:root {
    --color-primary: #2c3e50;
    --color-accent: #3498db;
    /* ... more colors */
}
```

### Adding New Work Cards
Copy an existing work card structure in `index.html` and modify the content. The JavaScript automatically handles all cards.

### Modifying Content
All content is in `index.html`. Edit the text within each section to customize the portfolio.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Future Enhancements

Potential features to add:
- Dark mode toggle
- Blog section
- Image gallery for adventures
- Animations library integration
- Backend API for contact form
- Multi-language support
- Search functionality for work projects
- Filter/sort options for portfolio items

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome! Feel free to fork the repository and submit pull requests.

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Bilbo Baggins**
- Location: Bag End, Hobbiton, The Shire
- Email: bilbo@bagend.shire
- Profession: Adventurer, Writer, Professional Burglar

## 🎯 Credits

- Design and Development: Custom built from scratch
- Font: Inter by Rasmus Andersson
- Icons: Custom SVG icons
- Inspiration: The adventures of J.R.R. Tolkien's The Hobbit

---

*"It's a dangerous business, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to."*

— Bilbo Baggins

