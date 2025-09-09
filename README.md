# Todo Merge Lab — Starter (SEM PR)

Projeto base em **HTML/CSS/JS** para o laboratório de **Git Merge, Conflitos e Gitflow** **sem** Pull Requests.

## Estrutura
```
/
├─ index.html
├─ style.css
└─ app.js
```

## Passo a passo (resumo)
1. Dono cria repositório `todo-merge-lab` no GitHub e adiciona o colega como colaborador.
2. Clone e primeiro commit na **main** com estes arquivos.
3. Crie a tag inicial:
   ```bash
   git tag v1.0.0 && git push origin v1.0.0
   ```
4. Crie a branch **develop** a partir de `main`:
   ```bash
   git checkout -b develop && git push -u origin develop
   ```

### Conflitos propostos
- **HTML**: alterar **a mesma linha** do `<h1>` no `index.html` em 2 features diferentes e fazer merge local para `develop`.
- **CSS**: alterar **a mesma linha** da regra `.btn` no `style.css` (ex.: `background`) em 2 features; resolver conflito padronizando e, se quiser, usando variável CSS:
  ```css
  :root { --btn-bg: #1976d2; }
  .btn { background: var(--btn-bg); }
  ```
- **JS**: alterar **a mesma função** `toggleDone` no `app.js` em 2 features (ex.: emoji ✅ e contador no título) e **conciliar** as lógicas.

### Hotfix e release
- **Hotfix** direto na `main`, tag `v1.0.1`, depois **merge de volta** para `develop`.
- **Release**: `develop` → `main` via CLI, tag `v1.1.0`.

### Comandos úteis
```bash
git checkout -b feature/nome
git fetch origin
git pull
git merge <branch>
git rebase origin/develop
git push --force-with-lease
git tag vX.Y.Z && git push origin vX.Y.Z
git revert <SHA>
git log --oneline --graph --decorate --all
```
