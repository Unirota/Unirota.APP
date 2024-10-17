export default new class HomePageService {

    getDestinyData() {
        return [
            {
                id: 1,
                destiny: "Unicesumar",
                city: "Maringá",
                imageUrl: require('../../assets/images/unicesumarImage.jpeg')
            },
            {
                id: 2,
                destiny: "Uningá",
                city: "Maringá",
                imageUrl: require('../../assets/images/uningaImage.jpeg')
            },
            {
                id: 3,
                destiny: "UEM",
                city: "Maringá",
                imageUrl: require('../../assets/images/UEMImage.jpeg')
            }
        ]
    }

    getGroupData() {
        return [
            {
                nome: "Grupo Alpha",
                motorista: "João Pedro",
                destino: "Unicesumar",
                horarioPartida: Date.now()
            },
            {
                nome: "Grupo Beta",
                motorista: "Maria Luiza",
                destino: "Unicesumar",
                horarioPartida: Date.now()
            },
            {
                nome: "Grupo Gama",
                motorista: "José Carlos",
                destino: "Unicesumar",
                horarioPartida: Date.now()
            }
        ]
    }

}