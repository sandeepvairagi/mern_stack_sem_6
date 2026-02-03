# Git Commands

git --version              -> show git version  
git config --global user.name "name"   -> set username  
git config --global user.email "email" -> set email  

git init                   -> initialize new git repository  
git status                 -> check repository status  
git clone url              -> copy remote repository  

git add file.txt           -> add file to staging  
git add .                  -> add all files to staging  
git rm file.txt            -> remove file  

git commit -m "message"    -> save changes with message  
git commit -a -m "msg"     -> commit tracked files directly  

git log                    -> show commit history  
git log --oneline          -> short commit history  
git show commit_id         -> show commit details  

git diff                   -> show file differences  
git diff --staged          -> staged file differences  

git branch                 -> list branches  
git branch new_branch      -> create branch  
git checkout branch_name   -> switch branch  
git checkout -b branch_name -> create and switch branch  
git merge branch_name      -> merge branch  

git remote -v              -> show remote url  
git remote add origin url  -> add remote repo  

git push origin branch     -> upload changes  
git pull origin branch     -> download changes  
git fetch                  -> fetch changes only  

git stash                  -> save uncommitted changes  
git stash list             -> list stashes  
git stash apply            -> apply stash  

git reset file.txt         -> unstage file  
git reset --hard           -> reset all changes  
git revert commit_id       -> undo commit safely  

git tag                    -> list tags  
git tag v1.0               -> create tag  
git push --tags            -> push tags  

git clean -f               -> remove untracked files  
git clean -fd              -> remove untracked folders  

git help                   -> git help  
git help commit            -> help for commit  