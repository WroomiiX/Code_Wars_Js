const whosOnline = (friends) => {
    const result = { online: [], offline: [], away: [] };

    friends.forEach(user => {
        const { username, status, lastActivity } = user;
        
        if (status === 'online') {
            if (lastActivity <= 10) {
                result.online.push(username);
            } else {
                result.away.push(username);
            }
        } else if (status === 'offline') {
            result.offline.push(username);
        } else if (status === 'away') {
            result.away.push(username);
        }
    });
    if (result.online.length === 0) {
        delete result.online;
    }

    return result;
};

const arr = [{username: 'David',status: 'online',lastActivity: 10},
             {username: 'Lucy',status: 'offline',lastActivity: 22},
             {username: 'Bob',status: 'online',lastActivity: 104}];

  console.log(whosOnline(arr));