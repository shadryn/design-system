// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar } from '../../avatar/base/example';
import { StandardIcon } from '../../icons/standard/example';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  EntityOption
} from '../../combobox/base/example';
import {
  ListboxPills,
  ListboxPillsItem,
  ListboxPill
} from '../../pills/listbox-of-pill-options/example';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

const ListboxDropdown = props => (
  <Listbox className="slds-dropdown slds-dropdown_fluid" vertical>
    <ListboxItem>
      <EntityOption
        id={listboxOptionId01}
        entityTitle="Acme"
        entityMeta
        focused={props.focused}
      />
    </ListboxItem>
    <ListboxItem>
      <EntityOption
        id={listboxOptionId02}
        entityTitle="Salesforce.com, Inc."
        entityMeta
      />
    </ListboxItem>
  </Listbox>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Demo wrapper
export const Context = props => (
  <div style={{ height: '10rem' }}>{props.children}</div>
);

// Default
export default (
  <ComboboxContainer
    inputIcon="right"
    inputIconRightSymbol="search"
    objectSwitcherInline
    autocomplete
    listbox={<ListboxDropdown />}
    objectSwitcher
  />
);

// States
export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <ComboboxContainer
        containerClassName="slds-has-input-focus"
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline
        autocomplete
        isOpen
        listbox={<ListboxDropdown />}
        objectSwitcher
      />
    ),
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element: (
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline
        autocomplete
        isOpen
        listbox={<ListboxDropdown focused />}
        objectSwitcher
        aria-activedescendant={listboxOptionId01}
      />
    )
  },
  {
    id: 'options-selected',
    label: 'Option(s) Selected',
    element: (
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline
        autocomplete
        objectSwitcher
      >
        <ListboxPills className="slds-p-top_xxx-small">
          <ListboxPillsItem>
            <ListboxPill label="Acme" tabIndex="0">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                title="Account"
                assistiveText="Account"
              />
            </ListboxPill>
          </ListboxPillsItem>
          <ListboxPillsItem>
            <ListboxPill label="Salesforce.com, Inc.">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                symbol="opportunity"
                title="Opportunity"
                assistiveText="Opportunity"
              />
            </ListboxPill>
          </ListboxPillsItem>
        </ListboxPills>
      </ComboboxContainer>
    )
  },
  {
    id: 'focused-options-selected',
    label: 'Focused - Option(s) Selected',
    element: (
      <ComboboxContainer
        isOpen
        containerClassName="slds-has-input-focus"
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline
        autocomplete
        listbox={<ListboxDropdown />}
        objectSwitcher
      >
        <ListboxPills className="slds-p-top_xxx-small">
          <ListboxPillsItem>
            <ListboxPill label="Acme" tabIndex="0">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                title="Account"
                assistiveText="Account"
              />
            </ListboxPill>
          </ListboxPillsItem>
          <ListboxPillsItem>
            <ListboxPill label="Salesforce.com, Inc.">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                symbol="opportunity"
                title="Opportunity"
                assistiveText="Opportunity"
              />
            </ListboxPill>
          </ListboxPillsItem>
        </ListboxPills>
      </ComboboxContainer>
    ),
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  }
];
