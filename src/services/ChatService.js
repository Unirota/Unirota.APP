export default new class ChatService {
  getMessages(){
    return [
      {
        id: 1,
        conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        usuarioId: 123,
        grupoId: 183,
        created_at: '2024-11-06'
      },
      {
        id: 2,
        conteudo: 'Hello world!',
        usuarioId: 3123,
        grupoId: 183,
        created_at: '2024-11-05'
      },
      {
        id: 3,
        conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        usuarioId: 3123,
        grupoId: 183,
        created_at: '2024-11-04'
      },
      {
        id: 4,
        conteudo: 'Hello world!',
        usuarioId: 123,
        grupoId: 183,
        created_at: '2024-11-03'
      },
    ]
  }

}
