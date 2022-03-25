import Route from '@ember/routing/route';
import Abstractroute from "./AbstractRoute";

export default class OrderRoute extends Abstractroute {

  model(param) {
    console.log(param);
    return this.store.findRecord('order', param.order_id, {
      include: 'orderdetails.product,user',
    });
  }

}
