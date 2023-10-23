const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// CREATE
async function createUser(name, email) {
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return user;
}

// READ
async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

// UPDATE
async function updateUser(id, data) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  });
  return user;
}

// DELETE
async function deleteUser(id) {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
}

// Exemplo de uso
async function main() {
  const createdUser = await createUser('João', 'joao@email.com');
  console.log('Usuário criado:', createdUser);

  const updatedUser = await updateUser(createdUser.id, { name: 'João da Silva' });
  console.log('Usuário atualizado:', updatedUser);

  const allUsers = await getUsers();
  console.log('Todos os usuários:', allUsers);

  const deletedUser = await deleteUser(createdUser.id);
  console.log('Usuário deletado:', deletedUser);

  const remainingUsers = await getUsers();
  console.log('Usuários restantes:', remainingUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
