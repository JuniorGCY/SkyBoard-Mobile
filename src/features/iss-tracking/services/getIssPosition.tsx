import * as satellite from 'satellite.js';
import { database } from "../../../../database";
import Satellite from '../../../../database/satellite';

export async function getIssPosition() {
    try {
        const satellitesTable = database.get<Satellite>('satellites');
        const allSavedSatellites = await satellitesTable.query().fetch();
        
        if (allSavedSatellites.length === 0) {
            console.log("Nenhum satélite salvo. Rode a função de update primeiro!");
            return;
        }
        const iss = allSavedSatellites[0];
        const satrec = satellite.twoline2satrec(iss.tleLine1, iss.tleLine2);
        const now = new Date();

        const positionAndVelocity = satellite.propagate(satrec, now);
        if (!positionAndVelocity || !positionAndVelocity.position || typeof positionAndVelocity.position === 'boolean') {
             console.log("Erro no cálculo orbital. O TLE pode estar corrompido ou velho demais.");
             return; 
        }

        const positionEci = positionAndVelocity.position;
        const gmst = satellite.gstime(now);
        
        const positionGd = satellite.eciToGeodetic(positionEci, gmst);

        const longitude = satellite.degreesLong(positionGd.longitude);
        const latitude = satellite.degreesLat(positionGd.latitude);
        const altitude = positionGd.height;

        return  {latitude, longitude, altitude}

    } catch (error) {
        console.error("Erro ao calcular posição:", error);
        return null
    }
}