# Divya Ponda - Personal Website

A clean, minimalist personal website built with modern web technologies and thoughtful design principles.

## 🌟 Features

- **Multi-page structure** with intuitive navigation
- **Clean, minimalist design** inspired by modern portfolio sites
- **Dark/light mode toggle** with system preference detection
- **Responsive design** that works on all devices
- **Subtle interactive effects** including custom cursor and gentle animations
- **Semantic HTML5** structure for accessibility
- **Performance optimized** with throttled animations and reduced motion support

## 📁 Project Structure

```
personalwebsite/
├── index.html          # Home page - intro, education, hobbies
├── projects.html       # Projects & Experience
├── thoughts.html       # Blog posts and reflections
├── now.html           # Current activities and updates
├── style.css          # Shared styles across all pages
├── script.js          # Interactive functionality
├── README.md          # This file
└── assets/            # Static assets (if any)
```

## 🚀 Deployment to GitHub Pages

### Initial Setup

1. **Create a new repository** on GitHub named `yourusername.github.io` (replace `yourusername` with your actual GitHub username)

2. **Clone this repository** to your local machine:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

3. **Copy all website files** to the repository root:
   ```bash
   cp /path/to/personalwebsite/* .
   ```

### Deployment Steps

1. **Add all files to git**:
   ```bash
   git add .
   ```

2. **Commit your changes**:
   ```bash
   git commit -m "Initial website deployment"
   ```

3. **Push to GitHub**:
   ```bash
   git push origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

5. **Your site will be live at**: `https://yourusername.github.io`

### Updating Your Site

To update your website:

1. Make changes to your local files
2. Add and commit changes:
   ```bash
   git add .
   git commit -m "Update website content"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```

Changes will be live within a few minutes.

## 🎨 Customization

### Colors and Themes

The color scheme is defined in CSS variables at the top of `style.css`. Key variables include:

- `--accent`: Primary accent color
- `--accent-light`: Light variant of accent color
- `--text-primary`: Main text color
- `--text-secondary`: Secondary text color
- `--bg-color`: Background color

### Content Updates

- **Home page**: Edit `index.html` to update intro, education, and hobbies
- **Projects**: Modify `projects.html` to add/remove projects and experience
- **Thoughts**: Update `thoughts.html` to add new blog posts or reflections
- **Now page**: Keep `now.html` current with what you're working on

### Interactive Effects

Mouse effects can be adjusted in `script.js`:
- Cursor trail count and behavior
- Parallax movement intensity
- Animation timing and easing

## 🔧 Technical Details

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Mobile-optimized touch interactions

### Performance
- Throttled mouse event handlers
- Reduced motion support for accessibility
- Optimized animations with `requestAnimationFrame`
- Lazy loading and efficient DOM manipulation

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Respects user's motion preferences
- High contrast ratios in both light and dark modes

## 📝 Content Guidelines

### Writing Style
- Keep copy conversational but professional
- Use active voice and clear, concise language
- Break up text with headings and whitespace
- Update the "Now" page regularly to keep it current

### Project Descriptions
- Lead with the impact or problem solved
- Include relevant technologies used
- Provide links to demos or code when available
- Keep descriptions concise but informative

## 🐛 Troubleshooting

### Common Issues

**GitHub Pages not updating**: 
- Check the Actions tab for build errors
- Ensure all files are committed and pushed
- Verify the Pages source is set to the correct branch

**Interactive effects not working**:
- Check browser console for JavaScript errors
- Ensure `script.js` is loading properly
- Test on different devices/browsers

**Styling issues**:
- Verify `style.css` is linked correctly in all HTML files
- Check for CSS syntax errors
- Test with browser developer tools

## 🤝 Contributing

This is a personal website template. Feel free to:
- Fork and adapt for your own use
- Submit issues for bugs or improvements
- Share feedback and suggestions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript. No frameworks, just clean code and thoughtful design.