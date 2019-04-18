import template from 'lodash/template';

export const name = template(
  `
Йо, йо, йо, это Фронтенд Юность! Рады, что ты хочешь предложить нам тему! Для добавления темы осталось только вкратце сформулировать ее и, если нужно, поподробнее описать. Начнем с *краткого описания*, о _чем_ бы ты хотел услышать?
`.trim()
);

export const emptyName = template(
  `
Сначала отправь мне название темы!
`.trim()
);

export const description = template(
  `
  Отлично, тогда жду от тебя описания, можно со ссылочками, и всем остальным! Также можно переслать мне в ответ сообщение из другого канала или чата.
`.trim()
);

export const thanks = template(
  `
	Тема принята, спасибо!
`.trim()
);

export const cardDescription = template(
  `
От: *<%= username %>*
<% if (forward) { %>
Перенаправлено от: <%= forward %>
<% } %>

<%= desc %>
`.trim()
);
