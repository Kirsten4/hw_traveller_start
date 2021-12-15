const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map(journey => journey.startLocation);
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map(journey => journey.endLocation);
  return result
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter(journey => journey.transport === transport);
  return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
 return this.journeys.reduce((runningTotal, journey) => runningTotal + journey.distance ,0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {

  const transportTypes = this.journeys.map(transportType => transportType.transport);

  const uniqueTransport = transportTypes.filter((transport, index, transportTypes) => transportTypes.indexOf(transport) === index);
  
  return uniqueTransport
};


module.exports = Traveller;
