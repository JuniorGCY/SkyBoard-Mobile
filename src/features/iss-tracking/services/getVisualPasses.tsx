import { useLocationStore } from "../store/useLocationStore";

export async function fetchAllFamousPasses() {
    try {
        const FAMOUS_SATELLITES = [
            { id: 25544, name: 'ISS (Estação Internacional)' },
            { id: 48274, name: 'Tiangong (Estação Chinesa)' },
            { id: 20580, name: 'Telescópio Hubble' }
        ];
        const userLat = useLocationStore.getState().latitude
        const userLng = useLocationStore.getState().longitude 
        const userAlt = 0; 
        const days = 5; 
        const minElevation = 10; 
        const apiKey = process.env.EXPO_PUBLIC_N2YO_API_KEY;

        const promessasDeBusca = FAMOUS_SATELLITES.map(async (sat) => {
            const minVisibility = 60;
            const url = `https://api.n2yo.com/rest/v1/satellite/visualpasses/${sat.id}/${userLat}/${userLng}/${userAlt}/${days}/${minVisibility}&apiKey=${apiKey}`;
            
            const response = await fetch(url);
            const data = await response.json();

            if (!data.passes) return [];

            return data.passes.map((pass: any) => {
                const startDate = new Date(pass.startUTC * 1000);
                const endDate = new Date(pass.endUTC * 1000);

                const formatadorTempo = new Intl.DateTimeFormat('pt-BR', {
                    hour: '2-digit', 
                    minute: '2-digit',
                    timeZone: 'America/Sao_Paulo'
                });

                return {
                    id: `${sat.id}-${pass.startUTC}`,
                    satelite: sat.name,
                    diaSemana: startDate.toLocaleDateString('pt-BR', { weekday: 'long' }),
                    dataCurta: startDate.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' }),
                    
                    horaInicio: formatadorTempo.format(startDate),
                    horaFim: formatadorTempo.format(endDate),
                    
                    magnitude: pass.mag ? pass.mag.toFixed(1) : "N/A", 
                    
                    elevacao: pass.maxEl,
                    duracaoMinutos: Math.round(pass.duration / 60)
                };
            });
        });

        const resultadosBrutos = await Promise.all(promessasDeBusca);

        const todasPassagens = resultadosBrutos.flat();

        todasPassagens.sort((a, b) => {
            const timeA = new Date(`${a.dataCurta} ${a.horaInicio}`).getTime();
            const timeB = new Date(`${b.dataCurta} ${b.horaInicio}`).getTime();
            return timeA - timeB;
        });
        return todasPassagens;

    } catch (error) {
        console.error("Erro ao buscar os famosos:", error);
        return [];
    }
}