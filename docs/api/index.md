## R-Blocks Project (Open-Source under Amherst College Official Domain)

Deployed Link: https://sliao.people.amherst.edu/r-blocks/

This page has a globally deployed web-application which helps folks learn R by an interactive Block-Based interface using the API integration of Google Blockly and rdrr.io with the support of HTML/CSS, JavaScript and ReactJS prepared by Dhyey Mavani'25 under instruction of Professor Shu-Min Liao and Dr. Andy Anderson.

In collaboration with:

- _Amherst College IT Department: https://www.amherst.edu/offices/it_
- _Google Blockly: https://developers.google.com/blockly/_
- Now: rdrr.io API for R Console | Earlier: _DataCamp API: https://datacamp.com/_

### Documentation for changes and updates to R-Blocks Software, follow the following work-flow:

#### A) Development and Testing both Locally and on GitHub

1. While working locally make sure that you work in `GitHub/r-block` or `GitHub/r-blocks` path which will be your local and personal GitHub connected development repository.
2. Switch the GitHub Desktop to `r-block` or `r-blocks` repository while working on your own for testing and to avoid leaks/commits to deployed `sliao` repository
3. Make sure to do `npm install react-scripts` to get the appropriate node_modules initialized.
4. Develop/make changes as needed and test intermittently using `npm run start` command
5. Go to GitHub Desktop and switch the branch to `main` of your personal `r-block` or `r-blocks`, then commit and push to save code progress on your personal GitHub development repository.

#### B) Deployment on Servers and GitHub

1. Make sure that you work in `GitHub/r-block` or `GitHub/r-blocks` path which will be your local and personal GitHub connected development repository.
2. Once you are ready, use `npm run build` command to build the app materials, and wait for the build to finish successfully.
3. Go to GitHub Desktop and switch the branch to `main` of your personal `r-block` or `r-blocks`, then commit and push to save code progress on your personal GitHub development repository.
4. Use `cd build` command to go into the build folder through Terminal.
5. Use `cp -r * ~/Documents/GitHub/sliao/r-blocks` to copy your new build stuff to local GitHub associated folder of `sliao/r-blocks`
6. Go to GitHub Desktop and switch the repository to `sliao`, then make sure that the branch is `main`, then commit and push to save code progress on `aanderson/sliao` deployment GitHub repository.
7. Use `scp -r * RemusUsername@remus:sliao/r-blocks` (For Example if you are Dhyey you can do `scp -r * dmavani25@remus:sliao/r-blocks`) and enter your Amherst Password when asked manually or through key-chain RSA and the changes should be live on https://sliao.people.amherst.edu/r-blocks/ almost instantaneously.
