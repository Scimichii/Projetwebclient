import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Ex1Controller extends Controller {
  @tracked content = 'Entrez votre texte';
  @tracked info = '';

  MAX = 100;

  get style() {
    if (this.size > 80) {
      return 'alert alert-success';
    }
    if (this.size < 80 && this.size > 20) {
      return 'alert alert-warning';
    }
    if (this.size < 20) {
      return 'alert alert-danger';
    }
    return '';
  }

  get size() {
    return this.MAX - this.content.length;
  }

  @action
  clear() {
    this.content = '';
  }

  @action
  save() {
    this.info = this.content;
  }
}
