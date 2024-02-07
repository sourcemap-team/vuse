import Accordion from 'src/components/common/accordion';
import { Trans } from 'react-i18next';
import GradientHeader from '../components/common/gradientHeader';
import { useTranslation } from 'react-i18next';

const FAQ = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <GradientHeader className={'text-xl lg:text-6xl py-2'}>
        {t('faq.title')}
      </GradientHeader>

      <div className={'mt-10'}>
        <Accordion
          className={'mt-3'}
          title={t('faq.question1')}
          content={t('faq.answer1')}
        />
        <Accordion
          className={'mt-3'}
          title={t('faq.question2')}
          content={t('faq.answer2')}
        />
        <Accordion
          className={'mt-3'}
          title={t('faq.question3')}
          content={t('faq.answer3')}
        />
        <Accordion
          className={'mt-3'}
          title={t('faq.question4')}
          content={t('faq.answer4')}
        />
        {/* <Accordion
          className={'mt-3'}
          title={t('faq.question5')}
          content={t('faq.answer5')}
        /> */}
        <Accordion
          className={'mt-3'}
          title={t('faq.question6')}
          content={t('faq.answer6')}
        />
        {/* <Accordion
          className={'mt-3'}
          title={t('faq.question8')}
          content={t('faq.answer8')}
        /> */}
      </div>
    </div>
  );
};

export default FAQ;
