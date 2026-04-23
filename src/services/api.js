const BASE_URL = "https://api.exchangerate-api.com/v4/latest"

export async function exchangeRateApi(fromCurrency) {

    try {
        const response = await fetch(`${BASE_URL}/${fromCurrency}`)
        if (!response.ok) {
            throw new Error(`Falha HTTP: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (err){
        console.log("Erro na API de cambio:", err)
        throw err
    }
}

