/**
statistiques par département :
- le nombre de d’échantillon
- température moyenne
- température minimale
- température maximale

+ pour les heures les plus chaudes (entre 13h et 15h) et les heures plus froides (entre 3h et 6 h)
+ par département et par mois

*/
function map(value) {
    var stat = {
       avg: value.temperature,
       cnt: 1,
       min: value.temperature,
       max: value.temperature
   };

   emit('stats - ' + value.departement, stat);
   emit('stats - ' + value.departement + ' - ' + dateFormat(value.date, 'yyyy-MM'), stat);

   if(dateHour(value.date) >= 13 && dateHour(value.date) < 15) {
        emit('stats - heures chaudes - ' + value.departement, stat);
        emit('stats - heures chaudes - ' + value.departement + ' - ' + dateFormat(value.date, 'yyyy-MM'), stat);
   }
   if(dateHour(value.date) >= 3 && dateHour(value.date) < 6) {
        emit('stats - heures froides - ' + value.departement, stat);
        emit('stats - heures froides - ' + value.departement + ' - ' + dateFormat(value.date, 'yyyy-MM'), stat);
   }
}
