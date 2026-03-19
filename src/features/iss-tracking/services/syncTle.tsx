import { database } from "../../../../database"
import Satellite from "../../../../database/satellite"

export async function updateIssDates() {
    try {
        const apiKey = process.env.EXPO_PUBLIC_N2YO_API_KEY;
        const response = await fetch(`https://api.n2yo.com/rest/v1/satellite/tle/25544&apiKey=${apiKey}`)
        const apiResponse = await response.json()

        const lines = apiResponse.tle.split('\r\n')
        const line1 = lines[0]
        const line2 = lines[1]

        await database.write(async () => {
            const satellitesTable = database.get<Satellite>('satellites')

            await satellitesTable.create(newRegister => {
                newRegister.noraId = apiResponse.info.satid;
                newRegister.name = apiResponse.info.satname;
                newRegister.tleLine1 = line1;
                newRegister.tleLine2 = line2;
            })
        })

        console.log("✅ Dados da ISS salvos no WatermelonDB com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao salvar:", error);
    }
}