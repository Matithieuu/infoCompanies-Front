import Company, { CheckedStatus } from "../data/company";

// https://github.com/typestack/class-transformer
// use this library to transform json to class ??

export function companyJsonToCompany(companyObj: any) {
    try {
        return new Company(
            companyObj.id,
            companyObj.denomination,
            companyObj.siren,
            companyObj.nic,
            companyObj.formeJuridique,
            companyObj.codeAPE,
            companyObj.adresse,
            companyObj.codePostal,
            companyObj.ville,
            companyObj.region,
            companyObj.dateImmatriculation,
            companyObj.dateRadiation,
            CheckedStatus.NotDone,
            companyObj.dateClotureExercice_1_2018,
            companyObj.ca_1_2018,
            companyObj.resultat1_2018,
            companyObj.dateClotureExercice_2_2018,
            companyObj.ca_2_2018,
            companyObj.resultat2_2018,
            companyObj.dateClotureExercice_3_2018,
            companyObj.ca_3_2018,
            companyObj.resultat3_2018,
            companyObj.dateClotureExercice_1_2019,
            companyObj.ca_1_2019,
            companyObj.resultat1_2019,
            companyObj.dateClotureExercice_2_2019,
            companyObj.ca_2_2019,
            companyObj.resultat2_2019,
            companyObj.dateClotureExercice_3_2019,
            companyObj.ca_3_2019,
            companyObj.resultat3_2019,
            companyObj.dateClotureExercice_1_2020,
            companyObj.ca_1_2020,
            companyObj.resultat1_2020,
            companyObj.dateClotureExercice_2_2020,
            companyObj.ca_2_2020,
            companyObj.resultat2_2020,
            companyObj.dateClotureExercice_3_2020,
            companyObj.ca_3_2020,
            companyObj.resultat3_2020,
            companyObj.dateClotureExercice_1_2021,
            companyObj.ca_1_2021,
            companyObj.resultat1_2021,
            companyObj.dateClotureExercice_2_2021,
            companyObj.ca_2_2021,
            companyObj.resultat2_2021,
            companyObj.dateClotureExercice_3_2021,
            companyObj.ca_3_2021,
            companyObj.resultat3_2021,
            companyObj.dateClotureExercice_1_2022,
            companyObj.ca_1_2022,
            companyObj.resultat1_2022,
            companyObj.dateClotureExercice_2_2022,
            companyObj.ca_2_2022,
            companyObj.resultat2_2022,
            companyObj.dateClotureExercice_3_2022,
            companyObj.ca_3_2022,
            companyObj.resultat3_2022,
            companyObj.dateClotureExercice_1_2023,
            companyObj.ca_1_2023,
            companyObj.resultat1_2023,
            companyObj.dateClotureExercice_2_2023,
            companyObj.ca_2_2023,
            companyObj.resultat2_2023,
            companyObj.dateClotureExercice_3_2023,
            companyObj.ca_3_2023,
            companyObj.resultat3_2023,
            companyObj.secteurActivite,
            companyObj.phone,
            companyObj.website,
            companyObj.reviews,
            companyObj.schedule,
            companyObj.instagram,
            companyObj.facebook,
            companyObj.twitter,
            companyObj.linkedin,
            companyObj.youtube,
            companyObj.email,
            companyObj.dateOfScrapping
        );
    } catch (e) {
        console.log(e);
        return;
    }
}