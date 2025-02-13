## R-Blocks
- Temporary Deployed Link (for 2.0): https://rblocks-64be8.web.app/
- IT Deployed Link: https://sliao.people.amherst.edu/r-blocks/

This page has a globally deployed web-application which helps folks learn R by an interactive Block-Based interface using the API integration of Google Blockly and rdrr.io with the support of HTML/CSS, JavaScript and ReactJS prepared by Dhyey Mavani'25 and Liam Davis '27 under instruction of Professor Shu-Min Liao and Dr. Andy Anderson.

Technologies used: 
- *Amherst College IT Department: https://www.amherst.edu/offices/it*
- *Google Blockly: https://developers.google.com/blockly/*
- *rdrr.io API: https://rdrr.io/* for R Console

## Contributing

### Setup
1. Fork and clone the repository
```bash
git clone https://github.com/DhyeyMavani2003/r-blocks.git
cd r-blocks/
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

### Development
1. Start the development server:
```bash
npm start
```

2. Make your changes and test them locally

3. Build the project to verify it compiles:
```bash
npm run build
```

4. See if the changes you made reflect properly:
```bash
firebase serve
```

### Pull Request Process
1. Create a new branch for your feature:
```bash
git checkout -b github_username/your-feature-name
```

2. Run the pre-commit hooks:
```bash
git add .
npm run format
git add .
```

To check if your code meets style guidelines, run:
```bash
npm run format:check
```

3. Commit your changes with descriptive messages:
```bash
git commit -m "Add: description of your changes"
git push --set-upstream origin branch-name
```

3. Push to your fork and submit a pull request

The project uses Firebase Hosting for deployment. Pull requests will automatically trigger a preview deployment through our GitHub Actions workflow. This allows reviewers to see your changes live before merging.

#### CI/CD
- All pull requests trigger an automatic build and preview deployment
- The preview URL will be posted as a comment on your PR

### Development Guidelines
- Follow the existing code style and structure.
- Test your changes thoroughly, both through unit tests and by running the application locally.
- Update documentation for your new feature.
- Keep pull requests focused on a single feature or fix. General rule of thumb is 150-200 lines per PR.