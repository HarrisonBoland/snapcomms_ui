import React from 'react';

import Users from './Users';

function UserList(props) {
  if (props.show === 'allusers') {
    return (
      <div>
        <Users title="Amy White" id="1" type="driver" />
        <Users title="Dan Snow" id="2" type="developer" />
        <Users title="Erlich Bachman" id="3" type="sales" />
        <Users title="Harrison Boland" id="4" type="developer" />
        <Users title="John Doe" id="5" type="sales" />
        <Users title="Keanu Reeves" id="6" type="driver" />
        <Users title="Kelly Hunter" id="7" type="developer" />
        <Users title="Lilly Bee" id="8" type="developer" />
        <Users title="Matt Smith" id="9" type="sales" />
        <Users title="Max Green" id="10" type="sales" />
        <Users title="Sally Ranger" id="11" type="developer" />
        <Users title="Sam Brown" id="12" type="developer" />
        <Users title="Tom Low" id="13" type="driver" />
      </div>
    );
  } else {
    return (
      <div>
        {props.show === 'driver' ? <Users title="Amy White" id="1" type="driver" /> : null}
        {props.show === 'developer' ? <Users title="Dan Snow" id="2" type="developer" /> : null}
        {props.show === 'sales' ? <Users title="Erlich Bachman" id="3" type="sales" /> : null}
        {props.show === 'developer' ? <Users title="Harrison Boland" id="4" type="developer" /> : null}
        {props.show === 'sales' ? <Users title="John Doe" id="5" type="sales" /> : null}
        {props.show === 'driver' ? <Users title="Keanu Reeves" id="6" type="driver" /> : null}
        {props.show === 'developer' ? <Users title="Kelly Hunter" id="7" type="developer" /> : null}
        {props.show === 'developer' ? <Users title="Lilly Bee" id="8" type="developer" /> : null}
        {props.show === 'sales' ? <Users title="Matt Smith" id="9" type="sales" /> : null}
        {props.show === 'sales' ? <Users title="Max Green" id="10" type="sales" /> : null}
        {props.show === 'developer' ? <Users title="Sally Ranger" id="11" type="developer" /> : null}
        {props.show === 'developer' ? <Users title="Sam Brown" id="12" type="developer" /> : null}
        {props.show === 'driver' ? <Users title="Tom Low" id="13" type="driver" /> : null}
      </div>
    );
  }
}

export default UserList;
