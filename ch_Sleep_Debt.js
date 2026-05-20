function sleepDebt(hoursSlept, targetHours) {
  if (!Array.isArray(hoursSlept)) {
    throw new TypeError('hoursSlept must be an array');
  }

  if (typeof targetHours !== 'number' || targetHours < 0) {
    throw new TypeError('targetHours must be a non-negative number');
  }

  let totalSleep = 0;

  for (const hours of hoursSlept) {
    if (typeof hours !== 'number' || hours < 0) {
      throw new TypeError('All sleep values must be non-negative numbers');
    }

    totalSleep += hours;
  }

  const requiredSleep =
    targetHours * (hoursSlept.length + 1);

  const remainingSleep =
    requiredSleep - totalSleep;

  return Math.max(0, remainingSleep);
}