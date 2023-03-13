const ChartSwap = () => {
  return (
    <section className="flex flex-col items-center content-center px-2 py-8 pb-32 sm:px-12 sm:py-16 lg:px-16">
      <div>
        <h2 className="font-semibold md:text-[60px] text-[24px] md:mb-[40px] mb-[20px]">
          Chart & Swap
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row w-full min-h-[80vh] gap-8">
        <div className="flex lg:w-[70%]">
          <iframe
            className="w-full min-h-[80vh] h-full rounded-3xl"
            id="iframe"
            title="DEXTools Trading Chart"
            src="https://www.dextools.io/widgets/en/bnb/pe-light/0xdc6302c973dc3b56eb2933ba492c06f2db8c2246?theme=dark&chartType=2&chartResolution=30&drawingToolbars=true"
          ></iframe>
        </div>
        <div className="flex lg:w-[30%]">
          <iframe
            className="w-full min-h-[80vh] h-full rounded-3xl"
            id="iframe"
            src="https://app.bogged.finance/swap?tokenIn=BNB&tokenOut=0xdc6302c973dc3b56eb2933ba492c06f2db8c2246&embed=1"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ChartSwap;
