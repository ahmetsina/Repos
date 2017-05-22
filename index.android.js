/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Body, Icon, Input, Item, List, ListItem } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Repos extends Component {
  render() {
    var items = ['Ankara','Istanbul','Kocaeli','Zonguldak','Trabzon','Yozgat','Canakkale'];

    return (
      <Container>
      <Header searchBar rounded>
                       <Item>
                           <Icon name="android-search" />
                           <Input placeholder="Search" />

                       </Item>
                       <Button transparent>
                           <Text>Search</Text>
                       </Button>
                   </Header>
                  <Content>
                  <List dataArray={items}
                       renderRow={(item) =>
                           <ListItem>
                               <Text>{item}</Text>
                           </ListItem>
                       }>
                   </List>

                  </Content>
                  <Footer>
                      <FooterTab>
                          <Button full>
                              <Text>Footer</Text>
                          </Button>
                      </FooterTab>
                  </Footer>
              </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Repos', () => Repos);
