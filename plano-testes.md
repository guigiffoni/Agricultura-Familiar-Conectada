# Plano de Testes - Casos de Teste

## Caso de Teste 1: Login de Usuário
**Caso de Uso:** Gerenciamento de usuários - Login
**Pré-condições:** Usuário deve estar cadastrado no sistema
**Dados de Teste:**
- Email: "usuario@exemplo.com"
- Senha: "senha123"

| Cenário | Ação | Resultado Esperado |
|---------|------|-------------------|
| CT01.01 | Inserir credenciais válidas e clicar em "Entrar" | Sistema redireciona para dashboard principal |
| CT01.02 | Inserir senha incorreta e clicar em "Entrar" | Sistema exibe mensagem "Senha incorreta" |
| CT01.03 | Clicar em "Esqueci minha senha" e inserir email válido | Sistema envia email com link para redefinição |

## Caso de Teste 2: Cadastro de Produto
**Caso de Uso:** Gerenciamento de produtos - Cadastrar produto
**Pré-condições:** Usuário deve ser agricultor e estar logado
**Dados de Teste:**
- Nome: "Tomate Orgânico"
- Preço: "R$ 8,50"
- Categoria: "Hortaliças"

| Cenário | Ação | Resultado Esperado |
|---------|------|-------------------|
| CT02.01 | Preencher todos campos obrigatórios e clicar "Salvar" | Produto é cadastrado e aparece na lista do agricultor |
| CT02.02 | Tentar salvar sem preencher nome do produto | Sistema exibe alerta "Nome é obrigatório" |
| CT02.03 | Cadastrar produto com foto opcional | Produto é salvo com imagem exibida no catálogo |

## Caso de Teste 3: Finalização de Pedido
**Caso de Uso:** Sistema de pedidos - Finalizar pedido
**Pré-condições:** Comprador logado com itens no carrinho
**Dados de Teste:**
- Carrinho com 2 produtos
- Endereço de entrega cadastrado

| Cenário | Ação | Resultado Esperado |
|---------|------|-------------------|
| CT03.01 | Clicar "Finalizar Pedido" com carrinho preenchido | Sistema gera pedido com status "novo" e esvazia carrinho |
| CT03.02 | Agricultor visualiza pedido e clica "Confirmar" | Status do pedido muda para "confirmado" |
| CT03.03 | Agricultor altera status para "enviado" | Comprador visualiza status atualizado como "enviado" |