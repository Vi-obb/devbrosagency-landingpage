export function getCurrentTimeForTimeZone(targetTimeZone: string): string {
	const options: Intl.DateTimeFormatOptions = {
	  timeZone: targetTimeZone,
	  hour12: true,
	  hour: 'numeric',
	  minute: 'numeric',
	 
	};
      
	const currentTimeInTargetZone: string = new Date().toLocaleTimeString([], options);
      
	return currentTimeInTargetZone;
      }
      