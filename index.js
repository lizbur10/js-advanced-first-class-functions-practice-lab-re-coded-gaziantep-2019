// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers) {
  const sortedDrivers = drivers.slice().sort(function (driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  })
  return sortedDrivers;
}

function driversByName(drivers) {
  const sortedDrivers = drivers.slice().sort(function (driverA, driverB) {
    return driverA.name.localeCompare(driverB.name);
  })
  return sortedDrivers;
}

function totalRevenue(drivers) {
  drivers.reduce(function (agg, el, i, arr) {
    return agg += el.revenue;
  }, 0)
  return agg;
}