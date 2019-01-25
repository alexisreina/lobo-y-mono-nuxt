/* eslint-disable */
import Vue from "vue";

export default (ctx, inject) => {
  <%
    const cms = serialize(options.cms)
  %>

  <% if (cms) { %>
    Vue.prototype.$cms = <%= cms %>;
    inject("cms", <%= cms %>);
  <% } %>
};
