<template>
     <div class="page-grid">

                <div class="page-overview purple-gradient">
                    <div class="content-column-left">
                            <div>
                                <h2>Form Fields</h2>

                                    <p>Form fields allow the user to input data into our UI. A typical use case is in forms or during order entry. It should be clear to the user that a form field can be used to input information and each one should be clearly labeled to differentiated one from another. Allied’s form fields also have different states depending on the user’s content input state. </p>
                            </div>

                            <div>
                                    <img alt="Form Fields" class="overview-image" src="../images/form-fields.svg">
                            </div>

                    </div>
                </div>

                <div class="page-content">
                                <div>
                                <h3>Form Field Types</h3>
                                <p>The most common form field types are:</p>
                                </div>

                                <div class="content-column-two">
                                    <div class="two-col-left">
                                    <h4 class="align-top">Outlined Form Fields</h4>
                                    <p>Our form field for standard use. This form field is designed to have a clear affordance for interaction and also keep the label hinting through-out the input process. It is also equipped with multiple states for the user. </p>
                                    </div>
                                    <div class="two-col-right">
                                    <img alt="Inactive Form Fields" src="../images/inactive-form-field.svg" />
                                    </div>

                                    <div class="two-col-left"><h4>Outline Form Fields with Icons</h4>
                                    <p>The same look as our normal outlined form field except it adds a visual element of an icon to help with scannability for more complex and dense form layouts. </p>
                                    </div>
                                    <div class="two-col-right">
                                    <img alt="Form Field With Icons" src="../images/form-field-icon.svg" />
                                    </div>

                                    <div class="two-col-left"><h4>Dropdown Fields</h4>
                                    <p>Used for the selection of preset nested options. </p>
                                    </div>
                                    <div class="two-col-right">
                                    <img alt="Form Field Dropdown" src="../images/form-field-dropdown.svg" />
                                    </div>

                                    <div class="two-col-left"><h4>Text Field Area</h4>
                                    <p>Used for taller text areas that need to wrap and overflow. They are a fixed height and create a vertical scroll once the content reaches the bottom of the field.</p>
                                    </div>
                                    <div class="two-col-right">
                                    <img alt="Form Field Text Area" src="../images/text-area.svg" />
                                    </div>

                                </div>
                                <hr>
                                <div>
                                        <h3>Form Field Anatomy</h3>

                                        </div>

                                        <div class="content-column-two">
                                            <div class="two-col-left">

                                            <p><b>1. Icon</b> - Optional Use <br>
                                                <b>2. Border</b> – 1px stroke - 2px corner <br>
                                                <b>3. Hint Label</b> – 12px - Color: #979797<br>
                                                <b>4. Helper Text</b> - 9px - Color: #979797 or #9E0000<br>
                                                <b>5. Focus Label</b> - 9px - Color: #008baa <br>
                                                <b>6. Cursor</b> – Indicates the current location of the text input.<br>

                                            </p>
                                            </div>
                                            <div class="two-col-right">
                                                    <img alt="Anatomy of a Form Field" src="../images/anatomy.svg" />
                                                    </div>
                                        </div>
                                <hr>

                                <div>
                                        <h3>Form Field States</h3>
                                        <p>Form fields can display the following states: inactive, focused, completed, error, and disabled.</p>
                                        </div>

                                        <div class="content-column-two remove-margin-bottom">
                                            <div class="two-col-left">

                                                    <h3 class="align-top">Inactive State</h3>
                                                    <img alt="Form Field Inactive State" src="../images/inactive-state.svg" />
                                            </div>
                                            <div class="two-col-right">
                                                    <h3 class="align-top">Focused State</h3>
                                                    <img alt="Form Field Focus State" src="../images/focus-state.svg" />
                                                    </div>
                                        </div>
                                        <div class="content-column-two remove-margin-bottom">
                                                <div class="two-col-left">

                                                        <h3 class="align-top">Completed State</h3>
                                                        <img alt="Form Field Complete State" src="../images/completed-state.svg" />
                                                </div>
                                                <div class="two-col-right">
                                                        <h3 class="align-top">Disabled State</h3>
                                                        <img src="../images/disabled-state.svg" />
                                                        </div>
                                            </div>
                                         <div class="content-column-two">
                                                    <div class="two-col-left">
                                                            <h3 class="align-top">Error State Unfilled</h3>
                                                            <img alt="Form Field Error State" src="../images/error-state.svg" />
                                                    </div>
                                                    <div class="two-col-right">
                                                        <h3 class="align-top">Error State Incorrect</h3>
                                                        <img alt="Form Field Alternate Error State" src="../images/error-2.svg" />
                                                        </div>

                                                </div>
                <hr>
                <div class="content-column-left">
                        <div>

                            <h3>Code</h3>
                            <p>When applying a button to the front end of an Allied product simply copy and paste the
                                html found here. You can also view the CSS to see how it works.</p>

                        </div>
                        <div>
                            <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="cbachelot" data-slug-hash="KEWxMx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Floating Form Fields (Updated)">
                                <span>See the Pen <a href="https://codepen.io/cbachelot/pen/KEWxMx/">
                                Floating Form Fields (Updated)</a> by Clark Bachelot (<a href="https://codepen.io/cbachelot">@cbachelot</a>)
                                on <a href="https://codepen.io">CodePen</a>.</span>
                              </p>
                              <script async type="application/javascript" src="https://static.codepen.io/assets/embed/ei.js"></script>

                              <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="cbachelot" data-slug-hash="bQPLKm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Drowpdown Web">
                                <span>See the Pen <a href="https://codepen.io/cbachelot/pen/bQPLKm/">
                                Drowpdown Web</a> by Clark Bachelot (<a href="https://codepen.io/cbachelot">@cbachelot</a>)
                                on <a href="https://codepen.io">CodePen</a>.</span>
                              </p>
                              <script async type="application/javascript" src="https://static.codepen.io/assets/embed/ei.js"></script>

                              <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="cbachelot" data-slug-hash="agMMmr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Search Element With Floating Form Field">
                                <span>See the Pen <a href="https://codepen.io/cbachelot/pen/agMMmr/">
                                Search Element With Floating Form Field</a> by Clark Bachelot (<a href="https://codepen.io/cbachelot">@cbachelot</a>)
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
  name: 'formfields',
  data () {
    return {
      title: 'formfields'
    }
  }
}
</script>
