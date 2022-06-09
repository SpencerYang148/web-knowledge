### 跨分支复制
`git checkout <branchname> <path>`

### 查看关联分支
- `git branch -vv`
- `cat .\.git\config`

### clone特定分支
- `git clone -b <branchname> <remote-repo-url>`
- `git clone -b <branchname> --single-branch <remote-repo-url>`
> [freecodecamp](https://www.freecodecamp.org/news/git-clone-branch-how-to-clone-a-specific-branch/)

### push到多个remote
```
git remote add <name> <url>
git remote set-url --add <name> <newurl>  
```