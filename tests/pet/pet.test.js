const {getPetsByStatus,getPetById,createPet,updatePet,deletePet} = require('../../services/pet.services');

describe('Fluxo PETs', () => {

  let petId;

  beforeAll(async () => {
    const newPet = {
      name: 'Pet de Teste',
      status: 'available'
    };

    const response = await createPet(newPet);

    petId = response.data.id;

    console.log(`Pet criado com ID: ${petId}`);
  });

  test('Buscar todos os pets disponíveis', async () => {
    const response = await getPetsByStatus('available');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  test('Buscar o pet criado pelo ID', async () => {
    const response = await getPetById(petId);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', petId);
  });

  test('Atualizar o pet criado', async () => {
    const updatedPet = {
      id: petId,
      name: 'Pet Atualizado',
      status: 'sold'
    };

    const response = await updatePet(updatedPet);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', petId);
    expect(response.data).toHaveProperty('name', 'Pet Atualizado');
    expect(response.data).toHaveProperty('status', 'sold');
  });

  test('Deletar o pet criado', async () => {
    const response = await deletePet(petId);

    expect(response.status).toBe(200);
  });

});