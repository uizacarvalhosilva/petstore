const axios = require('axios');
require('dotenv').config();

describe('Fluxo PETs', () => {

  test('Buscar todos os pets', async () => {
    const response = await axios.get(
      `${process.env.BASE_URL}/pet/findByStatus?status=available`
    );

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    console.log('Lista de pets disponíveis:', response.data);
  });
  test('Buscar um pet pelo ID', async () => {
    const response = await axios.get(
      `${process.env.BASE_URL}/pet/3`
    );
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    console.log('Detalhes do pet com ID 3:', response.data);
  });
  test('Cadastrar um novo pet', async () => {
    const newPet = {
      id: 123456,
      name: 'Novo Pet',
      status: 'available'
    };

    const response = await axios.post(
      `${process.env.BASE_URL}/pet`,
      newPet,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', newPet.id);
    console.log('Novo pet cadastrado:', response.data);
  });
  test('Atualizar um pet existente', async () => {
    const updatedPet = {
      id: 123456,
      name: 'Pet Atualizado',
      status: 'sold'
    };

    const response = await axios.put(
      `${process.env.BASE_URL}/pet`,
      updatedPet,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('name', updatedPet.name);
    console.log('Pet atualizado:', response.data);
  });
  test('Deletar um pet pelo ID', async () => {
    const petIdToDelete = 123456;

    const response = await axios.delete(
      `${process.env.BASE_URL}/pet/${petIdToDelete}`
    );

    expect(response.status).toBe(200);
    console.log(`Pet com ID ${petIdToDelete} deletado com sucesso.`);
  });
});