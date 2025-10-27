instalei
npm cache clean --force
rm -rf node_modules package-lock.json
npm install react-hook-form
npm install -g json-server
npm install axios primereact primeicons
npm audit fix
npm install react-hook-form
npm install --save-dev @types/react-hook-form    
npm install @hookform/resolvers
npm install --save-dev @types/hookform__resolvers
npm install yup

// adicione no package.json essa linha de código:

"dependencies": {
  "@hookform/resolvers": "^3.0.0", // Exemplo de versão
  "react-hook-form": "^7.43.9",
  ...
}