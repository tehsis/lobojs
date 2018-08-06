import React, { Component } from 'react';

import withStateForm from '../../HOCs/withStateForm'
import style from 'styled-components';

const Button = style.button``;
const Input = style.input``;
const Label = style.label``;
const Form = style.form``;

class GameConfigurator extends Component {
  render() {
    return <Form {...this.props}>
      <Label htmlFor="number_of_wolfs">¿Cuantos lobos?</Label>
      <Input name="number_of_wolfs" type="number" />
      <Label htmlFor="witch_enabled">¿Jugás con Bruja?</Label>
      <Input name="witch_enabled" type="checkbox" />
      <Label htmlFor="seer_enabled">¿Jugás con Vidente?</Label>
      <Input name="seer_enabled" type="checkbox" />
      <Label htmlFor="seer_enabled">¿Jugás con la nena?</Label>
      <Input name="little_girl_enabled" type="checkbox" />
      <Label htmlFor="hunter_enabled">¿Jugás con el cazador?</Label>
      <Input name="hunter_enabled" type="checkbox" />
      <Label for="hunter_enabled">¿Jugás con Cupido?</Label>
      <Input name="cupid_enabled" type="checkbox" />
      <Button>Comenzar</Button>
    </Form>
  }
}

export default withStateForm(GameConfigurator);