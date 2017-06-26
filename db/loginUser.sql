select *
from groupmember
where email = $1 AND password = $2;