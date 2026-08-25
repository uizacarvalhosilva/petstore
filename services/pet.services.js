const axios = require('axios');

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const getPetsByStatus = (status) => {
  return api.get('/pet/findByStatus', {
    params: {
      status
    }
  });
};

const getPetById = (id) => {
  return api.get(`/pet/${id}`);
};

const createPet = (pet) => {
  return api.post('/pet', pet);
};

const updatePet = (pet) => {
  return api.put('/pet', pet);
};

const deletePet = (id) => {
  return api.delete(`/pet/${id}`);
};

module.exports = {
  getPetsByStatus,
  getPetById,
  createPet,
  updatePet,
  deletePet
};