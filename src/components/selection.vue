<template>
     <div class="page-grid">

                <div class="page-overview red-gradient">
                    <div class="content-column-left">
                            <div>
                                <h2>Selection Controls</h2>

                                    <p>Selection controls allow users to complete tasks that involve making choices such as selecting options, or switching settings on or off. Selection controls are found on screens that ask users to make decisions or declare preferences such as settings or dialogs.</p>
                            </div>

                            <div>
                                    <img class="overview-image" src="../images/selection-controls.svg" alt="Selection Controls">
                            </div>

                    </div>
                </div>

                <div class="page-content">
                                <div>
                                <h2>Selection Control Types</h2>
                                <p>The most common selection controls types are:</p>
                                </div>

                                <div class="content-column-two bottom-margin-zero">
                                    <div class="two-col-left">
                                    <h3 class="align-top">Checkboxes</h3>
                                    <p>This pattern allows the user to make multiple selections from a list of items. It can also be paired with a parent checkbox for easy of selecting and deselecting multiple checkboxes. </p>
                                    <p><b>Parent and child checkboxes</b><br>
                                        Checkboxes can have a parent and child relationship. For example:
                                        <ul>
                                        <li>When the user selects a parent checkbox then all child checkboxes below are checked.</li>
                                        <li>So when a user unselects a parent checkbox then all child checkboxes are unchecked</li>
                                        <li>If only some of the checkboxes are selected but not all then the parent checkbox becomes an indeterminate checkbox.</li>
                                        </ul>
                                    </p>
                                    </div>
                                    <div class="two-col-right ">
                                    <img src="../images/checkbox-example.svg" alt="Checkbox Example" />
                                    </div></div>
                                    <div>
                                        <h4>Checkbox States</h4>
                                        <p>Checkboxes can be selected, unselected, disabled or indeterminate.</p>
                                    </div>
                                    <div class="six-column-layout">
                                        <div class="checkbox-states"><p class="remove-margin-top">Unselected</p><img src="../images/checkbox-unselected.svg" alt="Checkbox Unselected"></div>
                                        <div class="checkbox-states"><p class="remove-margin-top">Selected</p><img src="../images/checkbox-selected.svg" alt="Checkbox Selected"></div>
                                        <div class="checkbox-states"><p class="remove-margin-top">Indeterminate</p><img src="../images/checkbox-indeterminate.svg" alt="Checkbox Indeterminate"></div>
                                        <div class="checkbox-states"><p class="remove-margin-top">Disabled Unselected</p><img src="../images/disabled-unselected.svg" alt="Disabled Unselected"></div>
                                        <div class="checkbox-states"><p class="remove-margin-top">Disabled Selected</p><img src="../images/disabled-selected.svg" alt="Disabled Selected"></div>
                                        <div class="checkbox-states"><p class="remove-margin-top">Disabled Indeterminate</p><img src="../images/disabled-indeterminate.svg" alt="Disabled Indeterminate"></div>
                                    </div>
                                    <hr>
                                    <div class="content-column-two bottom-margin-zero ">
                                    <div class="two-col-left"><h3>Radio Buttons</h3>
                                    <p>Radio buttons allow a user to select one option from a list of items. It's a good idea to use radio buttons when the user needs to see all available options. If the user doesn't need to see all the options or the amount of options becomes overwhelming then a dropdown would be a good alternative because it saves space.</p>
                                    </div>
                                    <div class="two-col-right">
                                    <img src="../images/radio-buttons-example.svg" alt="Radio Buttons Example"/>
                                    </div></div>
                                    <div>
                                        <h4>Radio Button States</h4>
                                        <p>Checkboxes can be selected, unselected or disabled</p>
                                    </div>
                                    <div class="six-column-layout">
                                        <div class="checkbox-states"><p class="remove-margin-top">Unselected</p><img src="../images/radio-button-unselected.svg" alt="Radio Button Unselected"></div>
                                        <div class="checkbox-states"><p class="remove-margin-top">Selected</p><img src="../images/radio-button-selected.svg" alt="Radio Button Selected"></div>
                                        <div class="checkbox-states"><p class="remove-margin-top">Disabled Unselected</p><img src="../images/radio-button-unselected-disabled.svg" alt="Radio Button Unselected Disabled"></div>
                                        <div class="checkbox-states"><p class="remove-margin-top">Disabled Selected</p><img src="../images/radio-button-selected-disabled.svg" alt="Radio Button Selected Disabled"></div>
                                    </div>
                                    <hr>
                                    <div class="content-column-two bottom-margin-zero ">
                                        <div class="two-col-left"><h3>Toggles</h3>
                                        <p>Toggles switch the state of a setting or feature on or off. When a user toggles something on or off the result should take effect immediately.</p>
                                        </div>
                                        <div class="two-col-right">
                                        <img src="../images/toggle-example.svg" alt="Toggle Example"/>
                                        </div></div>
                                        <div>
                                            <h4>Toggle States</h4>
                                            <p>Toggles can be turned on, off or disabled</p>
                                        </div>
                                        <div class="six-column-layout">
                                            <div class="checkbox-states"><p class="remove-margin-top">Toggled On</p><img src="../images/Toggle-On.svg" alt="Radio Button Unselected"></div>
                                            <div class="checkbox-states"><p class="remove-margin-top">Toggled Off</p><img src="../images/Toggle-Off.svg" alt="Radio Button Selected"></div>
                                            <div class="checkbox-states"><p class="remove-margin-top">Toggled On Disabled </p><img src="../images/Toggle-Off-Disabled.svg" alt="Radio Button Unselected Disabled"></div>
                                            <div class="checkbox-states"><p class="remove-margin-top">Toggled Off Disabled</p><img src="../images/Toggle-On-Disabled.svg" alt="Radio Button Selected Disabled"></div>
                                        </div>
                                        <hr>

                                        <div class="content-column-left">
                                            <div>

                                                <h3>Code</h3>
                                                <p>When applying any of the selection controls to the front end of an Allied product simply copy and paste the
                                                    html found here. You can also view the CSS to see how it works.</p>

                                            </div>
                                            <div>

                                             <!--CODE PEN HERE -->

                                              <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="cbachelot" data-slug-hash="ZEzaXjR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Allied Radio Button">
                                                    <span>See the Pen <a href="https://codepen.io/cbachelot/pen/ZEzaXjR/">
                                                    Allied Radio Button</a> by Clark Bachelot (<a href="https://codepen.io/cbachelot">@cbachelot</a>)
                                                    on <a href="https://codepen.io">CodePen</a>.</span>
                                                  </p>
                                                  <script async type="application/javascript" src="https://static.codepen.io/assets/embed/ei.js"></script>
                                                  <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="cbachelot" data-slug-hash="mdbqqpM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="DS 42 Toggle">
                                                    <span>See the Pen <a href="https://codepen.io/cbachelot/pen/mdbqqpM/">
                                                    DS 42 Toggle</a> by Clark Bachelot (<a href="https://codepen.io/cbachelot">@cbachelot</a>)
                                                    on <a href="https://codepen.io">CodePen</a>.</span>
                                                  </p>
                                                  <script async type="application/javascript" src="https://static.codepen.io/assets/embed/ei.js"></script>
                                                  <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="cbachelot" data-slug-hash="xxKWezw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="DS 42 Checkbox">
                                                    <span>See the Pen <a href="https://codepen.io/cbachelot/pen/xxKWezw/">
                                                    DS 42 Checkbox</a> by Clark Bachelot (<a href="https://codepen.io/cbachelot">@cbachelot</a>)
                                                    on <a href="https://codepen.io">CodePen</a>.</span>
                                                  </p>
                                                  <script async type="application/javascript" src="https://static.codepen.io/assets/embed/ei.js"></script>
                                        </div>
                                    </div>

                                </div>

             </div>
</template>
<script>
export default{
  name: 'selection',
  data () {
    return {
      title: 'selection'
    }
  }
}
</script>
