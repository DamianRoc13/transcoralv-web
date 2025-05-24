type ReferenciaId = 
| "vitapro"
| "inbalnor"
| "cerveceria_nacional"
| "omarsa"
| "industria_pesquera_santa_priscila"
| "continental"
| "cargill"
| "edesa"
| "tecnova"
| "cridesa"
| "sika"
| "plasticos-rival"
| "graiman"
| "fibro_acero"
| "adilisa"
| "copacigulf"

type ReferenciaName =
| "Vitapro"
| "Inbalnor"
| "Cervecería Nacional"
| "Omarsa"
| "Industria Pesquera Santa Priscila"
| "Continental"
| "Cargill"
| "Edesa"
| "Tecnova"
| "Cridesa"
| "Sika"
| "Plásticos Rival"
| "Graiman"
| "Fibro Acero"
| "Adilisa"
| "Copacigulf"

export interface Referencia {
  id: ReferenciaId
  name: ReferenciaName
  url: string
  image: {
    logo: any
    width: number
    height: number
  }
}