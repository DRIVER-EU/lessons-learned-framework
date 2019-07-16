import m from 'mithril';
import { Button, Collection, CollectionMode, ModalPanel } from 'mithril-materialized';
import { LayoutForm } from 'mithril-ui-form';
import { ILesson } from '../../models';
import { LessonsSvc } from '../../services';
import { llf } from '../../template/llf';
import { capitalizeFirstLetter, deepCopy, deepEqual } from '../../utils';

const log = console.log;

const close = async (e?: UIEvent) => {
  log('closing...');
  m.route.set('/');
  if (e) {
    e.preventDefault();
  }
};

export const LessonsForm = () => {
  const state = {
    lesson: {} as Partial<ILesson>,
    isValid: false,
    form: llf,
    error: '',
    /** Relevant context for the Form, can be used with show/disabling */
    context: {
      admin: true,
    },
    section: '',
  };

  const onsubmit = async (e: MouseEvent) => {
    log('submitting...');
    e.preventDefault();
    if (state.lesson) {
      await LessonsSvc.save(state.lesson);
      state.lesson = deepCopy(LessonsSvc.getCurrent());
    }
  };

  return {
    oninit: () => {
      log('On INIT');
      log(state);
      const lesson = LessonsSvc.getCurrent();
      state.lesson = lesson ? deepCopy(lesson) : ({} as ILesson);
    },

    view: () => {
      const { lesson, form, context } = state;
      const hasChanged = !deepEqual(lesson, LessonsSvc.getCurrent());
      const sections = form
        .filter(c => c.type === 'section')
        .map(c => ({ id: c.id, title: c.label || capitalizeFirstLetter(c.id), onclick: () => (state.section = c.id) }));
      const section = state.section || sections[0].id;
      return m('.row', [
        m(
          '.col.s12.m3',
          m(Collection, {
            header: 'Content',
            mode: CollectionMode.LINKS,
            items: sections,
          }),
        ),
        m('.col.s12.m9', [
          m(LayoutForm, {
            form,
            obj: lesson,
            onchange: () => console.log(JSON.stringify(lesson, null, 2)),
            context,
            section,
          }),

          m(
            '.row',
            m('.col.s12.buttons', [
              m(Button, {
                label: 'Undo',
                iconName: 'undo',
                class: `green ${hasChanged ? '' : 'disabled'}`,
                onclick: () => (state.lesson = deepCopy(LessonsSvc.getCurrent())),
              }),
              ' ',
              m(Button, {
                label: 'Save',
                iconName: 'save',
                class: `green ${hasChanged ? '' : 'disabled'}`,
                onclick: onsubmit,
              }),
              ' ',
              m(Button, {
                label: 'Close',
                iconName: 'close',
                onclick: (e: UIEvent) => close(e),
              }),
              ' ',
              m(Button, {
                modalId: 'delete-lesson',
                label: 'Delete',
                iconName: 'delete',
                class: 'red',
              }),
            ]),
          ),
        ]),
        m(ModalPanel, {
          id: 'delete-lesson',
          title: 'Delete lesson',
          description: 'Do you really want to delete this Lesson - there is no way back?',
          options: { opacity: 0.7 },
          buttons: [
            {
              label: 'Delete',
              onclick: async () => {
                LessonsSvc.delete(lesson.$loki);
                close();
              },
            },
            {
              label: 'Discard',
            },
          ],
        }),
      ]);
    },
  };
};
