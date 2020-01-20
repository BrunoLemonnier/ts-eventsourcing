/* tslint:disable:max-classes-per-file */

import { ScalarIdentity } from '../ScalarIdentity';

it('Create identity', () => {
  const id = new ScalarIdentity('test');
  expect(id).toBeInstanceOf(ScalarIdentity);
  expect(id.toString()).toEqual('test');
  expect(id.getValue()).toEqual('test');
});

it('Create custom identity', () => {

  const identity = new ScalarIdentity(1);
  expect(identity.toString()).toEqual('1');
});

it('Know its the same', () => {
  const identity = new ScalarIdentity('2');
  const identity2 = new ScalarIdentity('2');
  expect(identity.equals(identity2)).toBeTruthy();
});

it('Know its not the same', () => {
  const identity = new ScalarIdentity('2');
  const identity2 = new ScalarIdentity('3');
  expect(identity.equals(identity2)).toBeFalsy();
});
