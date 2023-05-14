export const vehicleResolver = {
  Query: {
    loadVehicleByColor(color: String) {
      return { id: 1, name: 'John Smith', status: 'cached' }
    },
    loadVehicleByType(type: string) {
      return { id: 1, name: 'John Smith', status: 'cached' }
    },
    loadVehicleByPlateNumber(plateNumber: String) {
      return { id: 1, name: 'John Smith', status: 'cached' }
    }
  }
}
