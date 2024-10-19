export const formatTimestamp = (timestamp:string | number) => {
    const date = new Date(timestamp);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    return date.toLocaleString('en-GB', options as any).replace(','," ").toUpperCase();
  }
  