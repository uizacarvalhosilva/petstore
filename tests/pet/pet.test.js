const {getPetsByStatus,getPetById,createPet,updatePet,deletePet} = require('../../services/pet.services');

describe('Fluxo PETs', () => {

  test('Buscar todos os pets', async () => {
    const response = await getPetsByStatus('available');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  test('Buscar um pet pelo ID', async () => {
    const response = await getPetById(3);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
  });

  test('Cadastrar um novo pet', async () => {
    const newPet = {
      id: 123456,
      name: 'Novo Pet',
      status: 'available'
    };

    const response = await createPet(newPet);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', newPet.id);
  });

  test('Atualizar um pet existente', async () => {
    const updatedPet = {
      id: 123456,
      name: 'Pet Atualizado',
      status: 'sold'
    };

    const response = await updatePet(updatedPet);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('name', updatedPet.name);
  });

  test('Deletar um pet pelo ID', async () => {
    const response = await deletePet(123456);

    expect(response.status).toBe(200);
  });

});